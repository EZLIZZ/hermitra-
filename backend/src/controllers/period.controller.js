
import PeriodEntry from "../models/period.model.js";
import ApiResponse from "../utils/apiResponse.js";
import { ApiError } from "../utils/apiError.js";

export const addPeriod = async (req, res) => {
  const { startDate, endDate, flowLevel, symptoms } = req.body;
  const userId = req.user.id;

  const start = new Date(startDate);
  let finalEndDate;

  // Validate and calculate final end date
  if (endDate) {
    finalEndDate = new Date(endDate);   
  } else {
    finalEndDate = new Date(start);
    finalEndDate.setDate(finalEndDate.getDate() + 5);
  }

  // 🔥 Delete any overlapping periods
  await PeriodEntry.deleteMany({
    user: userId,
    $or: [
      {
        startDate: { $lte: finalEndDate },
        endDate: { $gte: start }
      },
      {
        startDate: { $gte: start, $lte: finalEndDate }
      }
    ]
  });

  // Create new period entry
  const newPeriod = await PeriodEntry.create({
    user: userId,
    startDate: start,
    endDate: finalEndDate,
    flowLevel,
    symptoms
  });

  // Predict next period (28 days after start)
  const nextStart = new Date(start);
  nextStart.setDate(nextStart.getDate() + 28);
  const nextEnd = new Date(nextStart);
  nextEnd.setDate(nextEnd.getDate() + 5);

  res.status(201).json(
    new ApiResponse(201,
      {
        currentPeriod: newPeriod,
        predictedNext: {
          startDate: nextStart,
          endDate: nextEnd
        }
      },
      "Period added. Any overlapping entry was replaced."
    )
  );
};


// GET: Get all period history for logged-in user
export const getMyPeriods = async (req, res) => {
  const userId = req.user.id;

  const month = parseInt(req.query.month); // e.g., 7 for July
  const year = parseInt(req.query.year);   // e.g., 2025

  if (!month || !year) {
    throw new ApiError(400, "Month and year are required as query parameters.");
  }

  // Create start and end of the month
  const startDate = new Date(year, month - 1, 1); // months are 0-based
  const endDate = new Date(year, month, 0, 23, 59, 59); // last day of the month

  const entries = await PeriodEntry.find({
    user: userId,
    startDate: { $gte: startDate, $lte: endDate }
  }).sort({ startDate: -1 });

  res.status(200).json(new ApiResponse(200, entries, `Periods for ${month}/${year} fetched.`));
};

// PUT: Update a specific period entry
export const updatePeriod = async (req, res) => {
  const { id } = req.params;
  const { startDate, endDate, flowLevel, symptoms } = req.body;

  const entry = await PeriodEntry.findById(id);
  if (!entry) throw new ApiError(404, "Period entry not found.");

  // Update start date if provided
  if (startDate) {
    entry.startDate = new Date(startDate);
  }

  // Update end date or auto-set to 5 days from start
  if (endDate) {
    entry.endDate = new Date(endDate);
  } else if (startDate) {
    const calculatedEnd = new Date(startDate);
    calculatedEnd.setDate(calculatedEnd.getDate() + 5);
    entry.endDate = calculatedEnd;
  }

  // Update other optional fields
  if (flowLevel) entry.flowLevel = flowLevel;
  if (symptoms) entry.symptoms = symptoms;

  await entry.save();
  res.status(200).json(new ApiResponse(200, entry, "Period entry updated."));
};


// DELETE: Delete a period entry
export const deletePeriod = async (req, res) => {
  const { id } = req.params;
  const deleted = await PeriodEntry.findByIdAndDelete(id);
  if (!deleted) throw new ApiError(404, "Period entry not found.");
  res.status(200).json(new ApiResponse(200, {}, "Period entry deleted."));
};

export const getCycleInfo = async (req, res) => {
  const userId = req.user.id;

  // Find the latest period entry for the user (by startDate)
  const latestPeriod = await PeriodEntry.findOne({ user: userId }).sort({ startDate: -1 });

  if (!latestPeriod) {
    // No data yet - return placeholders
    return res.status(200).json(
      new ApiResponse(200, {
        currentCycleDay: "--",
        nextPeriodStart: "--",
        fertileWindow: "--"
      }, "No period data found yet.")
    );
  }

  const today = new Date();
  const startDate = new Date(latestPeriod.startDate);
  
  // Calculate current cycle day
  const diffTime = today.getTime() - startDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 3600 * 24)) + 1; // +1 because cycle day starts at 1

  // Assume 28-day cycle length
  const cycleLength = 28;

  // Calculate next period start date
  const nextPeriodStart = new Date(startDate);
  nextPeriodStart.setDate(nextPeriodStart.getDate() + cycleLength);

  // Calculate fertile window (days 10 to 16 of the cycle)
  const fertileStart = new Date(startDate);
  fertileStart.setDate(fertileStart.getDate() + 9); // day 10 (0-based)
  const fertileEnd = new Date(startDate);
  fertileEnd.setDate(fertileEnd.getDate() + 15); // day 16

  // Format dates as ISO strings (or format as needed)
  const formatDate = (date) => date.toISOString().split("T")[0];

  res.status(200).json(
    new ApiResponse(200, {
      currentCycleDay: diffDays > cycleLength ? "--" : diffDays,
      nextPeriodStart: formatDate(nextPeriodStart),
      fertileWindow: `${formatDate(fertileStart)} to ${formatDate(fertileEnd)}`
    }, "Cycle info fetched successfully.")
  );
};