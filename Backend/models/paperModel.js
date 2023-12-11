import mongoose from "mongoose";

const PaperSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  collection: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PaperCollection",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Paper = mongoose.model(
  "Paper",
  PaperSchema
);

module.exports = Paper;
