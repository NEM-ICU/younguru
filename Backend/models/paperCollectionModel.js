import mongoose from "mongoose";

const PaperCollectionSchema = new mongoose.Schema({
  session: {
    type: String,
    required: true,
  },
  classCode: {
    type: Number,
    required: true,
  },
  limit: {
    type: Number,
    required: true,
    default: 10,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
  },
  isOngoing: {
    type: Boolean,
    default: true,
  },
});

const PaperCollection = mongoose.model(
  "PaperCollection",
  PaperCollectionSchema
);

export default PaperCollection;
