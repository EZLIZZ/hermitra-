import ExerciseLog from "../models/exercise.model.js";
import { ApiError } from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";

// ✅ Add new exercise log
export const addExerciseLog = async (req, res) => {
  const userId = req.user.id;
  const { type, duration, calories, videoLink, notes, date } = req.body;

  if (!type || !duration) {
    throw new ApiError(400, "Exercise type and duration are required.");
  }

  const exercise = await ExerciseLog.create({
    user: userId,
    type,
    duration,
    calories,
    videoLink,
    notes,
    date: date ? new Date(date) : new Date(),
  });

  res.status(201).json(new ApiResponse(201, exercise, "Exercise log added."));
};

// ✅ Update an existing log by ID
export const updateExerciseLog = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  const exercise = await ExerciseLog.findOne({ _id: id, user: userId });
  if (!exercise) throw new ApiError(404, "Exercise log not found.");

  const { type, duration, calories, videoLink, notes, date } = req.body;

  if (type) exercise.type = type;
  if (duration) exercise.duration = duration;
  if (calories) exercise.calories = calories;
  if (videoLink !== undefined) exercise.videoLink = videoLink;
  if (notes !== undefined) exercise.notes = notes;
  if (date) exercise.date = new Date(date);

  await exercise.save();
  res.status(200).json(new ApiResponse(200, exercise, "Exercise log updated."));
};

// ✅ Delete an exercise log
export const deleteExerciseLog = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  const deleted = await ExerciseLog.findOneAndDelete({ _id: id, user: userId });
  if (!deleted) throw new ApiError(404, "Exercise log not found.");

  res.status(200).json(new ApiResponse(200, {}, "Exercise log deleted."));
};

// 📅 Get logs for a specific DAY
export const getExerciseLogsByDay = async (req, res) => {
  const userId = req.user.id;
  const { date } = req.query;

  if (!date) throw new ApiError(400, "Date is required.");

  const start = new Date(date);
  const end = new Date(start);
  end.setDate(end.getDate() + 1);

  const logs = await ExerciseLog.find({
    user: userId,
    date: { $gte: start, $lt: end },
  });

  // 🔢 Calculate totals
  const totalExercises = logs.length;
  const totalDuration = logs.reduce((sum, log) => sum + (log.duration || 0), 0);
  const totalCalories = logs.reduce((sum, log) => sum + (log.calories || 0), 0);

  res.status(200).json(
    new ApiResponse(200, {
      logs,
      summary: {
        totalExercises,
        totalDuration,
        totalCalories,
      }
    }, "Exercise logs and summary for the day.")
  );
};


// 📆 Get logs for a specific MONTH
export const getExerciseLogsByMonth = async (req, res) => {
  const userId = req.user.id;
  const { month, year } = req.query;

  if (!month || !year) {
    throw new ApiError(400, "Month and year are required.");
  }

  const start = new Date(year, month - 1, 1);
  const end = new Date(year, month, 0, 23, 59, 59);

  const logs = await ExerciseLog.find({
    user: userId,
    date: { $gte: start, $lte: end }
  }).sort({ date: -1 });

  res.status(200).json(new ApiResponse(200, logs, `Exercise logs for ${month}/${year}`));
};

// 📈 Get logs for a WEEK from a specific start date
export const getExerciseLogsByWeek = async (req, res) => {
  const userId = req.user.id;
  const { startDate } = req.query;

  if (!startDate) throw new ApiError(400, "Start date is required.");

  const start = new Date(startDate);
  const end = new Date(start);
  end.setDate(end.getDate() + 6); // Covers 7 days total
  end.setHours(23, 59, 59, 999); // Include full last day

  const logs = await ExerciseLog.find({
    user: userId,
    date: { $gte: start, $lte: end }
  }).sort({ date: 1 });

  res.status(200).json(new ApiResponse(200, logs, "Exercise logs for the week."));
};


//exercise streak
export const getExerciseStreak = async (req, res) => {
  const userId = req.user.id;

  // 1. Get all unique exercise dates (strip time)
  const logs = await ExerciseLog.find({ user: userId }).select("date");
  const uniqueDates = new Set(
    logs.map(log => new Date(log.date).toISOString().split("T")[0])
  );

  // 2. Start from today, count back
  let streak = 0;
  let currentDate = new Date();

  while (true) {
    const dateStr = currentDate.toISOString().split("T")[0];
    if (uniqueDates.has(dateStr)) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1); // go to previous day
    } else {
      break; // streak broken
    }
  }

  res.status(200).json(new ApiResponse(200, { streak }, "Current exercise streak."));
};
