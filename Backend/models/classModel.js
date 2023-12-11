import mongoose from "mongoose";

const ClassSchema = new mongoose.Schema({
  classCode: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  editors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
});

const ClassModel = mongoose.model("Class", ClassSchema);

module.exports = ClassModel;
