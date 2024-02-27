import ClassModel from "../models/classModel.js";
import PaperCollection from "../models/paperCollectionModel.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";
import { validatePaperCollectionSchema } from "../validators/validator.js";

// Create Paper Collection
const createPaperCollection = catchAsync(async (req, res, next) => {
  const { error, value } = validatePaperCollectionSchema(req.body);

  if (error) {
    return next(new AppError(error.message, 400));
  }

  // Check if class belong to the user.
  const classDetails = await ClassModel.find({ rootKey: req.user.rootKey });

  if (!classDetails[0]) {
    return next(new AppError("Unauthorized Action", 401));
  }

  let classCode;

  classDetails.forEach((item) => {
    if (item.classCode == value.classCode) {
      classCode = item.classCode;
    }
  });

  const newPaperCollection = await PaperCollection.create({
    ...value,
    classCode,
  });

  res.status(200).json({
    status: "success",
    data: "Account Created Successfully!",
  });
});

export { createPaperCollection };
