import Jwt from "jsonwebtoken";
import { hash, compare } from "bcrypt";
import Superuser from "./../models/superuserModel.js";
import User from "../models/userModel.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";
import {
  validateSuperuserSignup,
  validateAdminSignupSchema,
  validateLoginSchema,
  validateUserLoginSchema,
  validateAdminLoginSchema,
} from "../validators/validator.js";
import Admin from "../models/adminModel.js";

// Create Token
const signToken = (id) => {
  return Jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// Create and send JWT token
const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  // const cookieOptions = {
  //   expires: new Date(
  //     Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
  //   ),
  //   httponly: true,
  // };
  // if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
  // res.cookie("jwt", token, cookieOptions);
  // remove the password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user: user,
    },
  });
};

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

// ADMIN Signup
const createAdmin = catchAsync(async (req, res, next) => {
  const { error, value } = validateAdminSignupSchema(req.body);

  if (error) {
    return next(new AppError(error.message, 400));
  }

  const hashedPassword = await hash(value.password, 10);

  const newAdmin = await Admin.create({
    ...value,
    rootKey: req.user.rootKey,
    password: hashedPassword,
    role: "admin",
  });

  res.status(200).json({
    status: "success",
    data: "Account created successfully!",
  });
});

// Root Login
const rootLogin = catchAsync(async (req, res, next) => {
  const { error, value } = validateLoginSchema(req.body);

  if (error) {
    return next(new AppError(error.message, 400));
  }

  // check if user exists
  const superuser = await Superuser.findOne({ email: value.email }).select(
    "+password"
  );

  // Check whether the provided password matches the stored password.
  if (!superuser || !(await compare(value.password, superuser.password))) {
    return next(new AppError("invalid password or user", 400));
  }

  //if everything ok, sent token to the client
  createSendToken(superuser, 200, res);
});

// Admin Login
const adminLogin = catchAsync(async (req, res, next) => {
  const { error, value } = validateAdminLoginSchema(req.body);

  if (error) {
    return next(new AppError(error.message, 400));
  }

  // check if admin exists
  const admin = await Admin.findOne({ email: value.email }).select("+password");

  // Check whether the provided password matches the stored password and if the rootKey matches.
  if (
    !admin ||
    value.rootKey != admin.rootKey ||
    !(await compare(value.password, admin.password))
  ) {
    return next(new AppError("invalid password or user", 400));
  }

  //if everything ok, sent token to the client
  createSendToken(Admin, 200, res);
});

// User Login
const userLogin = catchAsync(async (req, res, next) => {
  const { error, value } = validateUserLoginSchema(req.body);

  if (error) {
    return next(new AppError(error.message, 400));
  }

  // check if user exists
  const user = await User.findOne({ email: value.email }).select("+password");

  if (!user) {
    return next(new AppError("invalid password or user", 400));
  }

  if (user.role == "editor") {
    // Check whether the provided password matches the stored password and if the rootKey matches.
    if (
      value.rootKey != user.rootKey ||
      !(await compare(value.password, user.password))
    ) {
      return next(new AppError("invalid password or user", 400));
    }
    //if everything ok, sent token to the client
    createSendToken(user, 200, res);
  } else if (user.role == "user") {
    if (
      value.classCode != user.classCode ||
      !(await compare(value.password, user.password))
    ) {
      return next(new AppError("invalid password or user", 400));
    }
    //if everything ok, sent token to the client
    createSendToken(user, 200, res);
  } else {
    return next(new AppError("invalid password or user", 400));
  }
});

export { createSuperUser, createAdmin, rootLogin, userLogin, adminLogin };
