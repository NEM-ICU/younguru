import mongoose from "mongoose";

const ClassSchema = new mongoose.Schema({
  className: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  institute: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  classCode: {
    type: Number,
    required: true,
    unique: true,
  },
  rootKey: {
    type: Number,
    required: true,
  },
});

const ClassModel = mongoose.model("Class", ClassSchema);

export default ClassModel;
