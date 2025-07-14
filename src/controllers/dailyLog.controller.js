// controllers/dailyLog.controller.js
import DailyLog from "../models/dailyLog.model.js";
import ApiResponse from "../utils/apiResponse.js";
import { ApiError } from "../utils/apiError.js";

// POST or PUT: Add/update log for a specific day
export const upsertDailyLog = async (req, res) => {
  const userId = req.user.id;
  const { date, mood, symptoms, sleepHours, weight, notes } = req.body;

  const logDate = new Date(date);
  const existingLog = await DailyLog.findOne({ user: userId, date: logDate });

  let log;
  if (existingLog) {
    // Update
    existingLog.mood = mood;
    existingLog.symptoms = symptoms;
    existingLog.sleepHours = sleepHours;
    existingLog.weight = weight;
    existingLog.notes = notes;
    log = await existingLog.save();
  } else {
    // Create
    log = await DailyLog.create({
      user: userId,
      date: logDate,
      mood,
      symptoms,
      sleepHours,
      weight,
      notes
    });
  }

  res.status(200).json(new ApiResponse(200, log, "Log saved for the day."));
};

// GET: Fetch logs for a specific month
export const getMonthlyLogs = async (req, res) => {
  const userId = req.user.id;
  const month = parseInt(req.query.month); // 1-12
  const year = parseInt(req.query.year);   // e.g., 2025

  if (!month || !year) {
    throw new ApiError(400, "Month and year required as query.");
  }

  const start = new Date(year, month - 1, 1);
  const end = new Date(year, month, 0, 23, 59, 59);

  const logs = await DailyLog.find({
    user: userId,
    date: { $gte: start, $lte: end }
  }).sort({ date: -1 });

  res.status(200).json(new ApiResponse(200, logs, `Logs for ${month}/${year} fetched.`));
};

// controllers/dailyLog.controller.js
export const getDailyLog = async (req, res) => {
  const userId = req.user.id;
  const { date } = req.query; // Expect date like '2025-07-07'

  if (!date) {
    throw new ApiError(400, "Date query parameter is required.");
  }

  const logDate = new Date(date);
  const nextDate = new Date(logDate);
  nextDate.setDate(nextDate.getDate() + 1);

  // Find the log for the exact day
  const log = await DailyLog.findOne({
    user: userId,
    date: {
      $gte: logDate,
      $lt: nextDate, // to cover all timestamps of that day
    },
  });

  if (!log) {
    return res.status(200).json(new ApiResponse(200, null, "No log found for this date."));
  }

  res.status(200).json(new ApiResponse(200, log, "Log for the date fetched."));
};

