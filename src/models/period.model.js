import mongoose from "mongoose";

const periodSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date
  },
  flowLevel: {
    type: String,
    enum: ["light", "medium", "heavy"],
    default: undefined // optional
  },
  symptoms: [String], // optional
}, { timestamps: true });

const PeriodEntry = mongoose.model("PeriodEntry", periodSchema);
export default PeriodEntry;
