import { hash, compare } from "bcrypt";
import Superuser from "./../models/superuserModel.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";
import { validateSuperuserSignup } from "../validators/superuserValidator.js";

// REQ CODE
// const isMatch = await compare(value.password, hashedPassword);

// ROOT Signup
const createSuperUser = catchAsync(async (req, res, next) => {
  const { error, value } = validateSuperuserSignup(req.body);

  if (error) {
    return next(new AppError(error.message, 400));
  }

  function getRandomPositive8Digit() {
    const randomFloat = Math.random() * 99999999;
    return Math.round(randomFloat).toString().padStart(8, "0");
  }

  const rootKey = getRandomPositive8Digit();
  const hashedPassword = await hash(value.password, 10);

  const newSuperuser = await Superuser.create({
    ...value,
    password: hashedPassword,
    rootKey,
  });

  res.status(200).json({
    status: "success",
    data: "Account created successfully!",
  });
});

export { createSuperUser };
