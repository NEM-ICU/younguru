import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  rootKey: {
    type: Number,
  },
  classCode: {
    type: Number,
  },
  role: {
    type: String,
    enum: ["root", "admin", "editor", "student"],
    default: "student",
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
