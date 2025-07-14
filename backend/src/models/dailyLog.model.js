
import mongoose from "mongoose";

const dailyLogSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  mood: {
    type: String,
    // enum: ["happy", "sad", "irritable", "anxious", "neutral"],
  },
  symptoms: [String],
  sleepHours: Number,
  weight: Number,
  notes: String,             // Main notes about the day
  additionalNotes: String,  // 🔥 Here's the additionalNotes field
}, {
  timestamps: true,
});

export default mongoose.model("DailyLog", dailyLogSchema);
