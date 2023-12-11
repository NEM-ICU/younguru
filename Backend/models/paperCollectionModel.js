import mongoose from "mongoose";

const PaperCollectionSchema = new mongoose.Schema({
  session: {
    type: String,
    required: true,
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
  },
  papers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Paper",
    },
  ],
  limit: {
    type: Number,
    required: true,
    default: 10,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const PaperCollection = mongoose.model(
  "PaperCollection",
  PaperCollectionSchema
);

module.exports = PaperCollection;
