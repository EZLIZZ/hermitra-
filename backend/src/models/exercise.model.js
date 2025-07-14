import mongoose from "mongoose";

const exerciseLogSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
    type: {
      type: String,
      enum: ["cardio", "yoga", "strength", "walk", "stretch", "other"],
      required: true,
    },
    duration: {
      type: Number, // in minutes
      required: true,
    },
    calories: {
      type: Number, // calories burned
      required: true,
    },
    videoLink: {
      type: String, // For yoga tutorial link (optional)
    },
    notes: {
      type: String,
      maxlength: 300,
    },
  },
  { timestamps: true }
);

export default mongoose.model("ExerciseLog", exerciseLogSchema);
