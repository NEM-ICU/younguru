import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";
import Class from "../models/classModel.js";
import { validateClassSchema } from "../validators/validator.js";

// Create Class
const createClass = catchAsync(async (req, res, next) => {
  const { error, value } = validateClassSchema(req.body);

  if (error) {
    return next(new AppError(error.message, 400));
  }

  function getRandomPositive8Digit() {
    const randomFloat = Math.random() * 99999999;
    return Math.round(randomFloat).toString().padStart(8, "0");
  }

  const classCode = getRandomPositive8Digit();

  const newClass = await Class.create({
    ...value,
    classCode,
    rootKey: req.user.rootKey,
  });

  res.status(200).json({
    status: "success",
    data: "Class Created Successfully!",
  });
});

export { createClass };
