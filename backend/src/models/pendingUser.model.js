import mongoose from "mongoose";

const pendingUserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  otp: { type: String, required: true },
  otpExpires: { type: Date, required: true }, // used as TTL trigger
  password: { type: String, required: true },
  firstname: { type: String },
  lastname: { type: String },
  age:{type:Number},
  phoneNumber: { type: String }
});

// ✅ TTL index: delete the document exactly when otpExpires is reached
pendingUserSchema.index({ otpExpires: 1 }, { expireAfterSeconds: 0 });

const PendingUser = mongoose.model("PendingUser", pendingUserSchema);

export default PendingUser;
