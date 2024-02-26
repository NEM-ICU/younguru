import AppError from "../utils/appError.js";
import Jwt from "jsonwebtoken";
import catchAsync from "../utils/catchAsync.js";
import User from "../models/userModel.js";

const protect = catchAsync(async (req, res, next) => {
  //Getting token and check it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new AppError("please log in to get access", 401));
  }

  //Verification token
  var decoded = Jwt.verify(token, process.env.JWT_SECRET);

  // Check if user still exists.
  const user = await User.findById(decoded.id);
  if (!user) {
    return next(
      new AppError("the user belonging to this token does no longer exist", 401)
    );
  }

  //Grant access protected ROUTE
  req.user = {
    id: decoded.id,
    rootKey: user.rootKey,
    classCode: user.classCode,
    role: user.role,
  };

  next();
});

const restrictTo = (...roles) => {
  return (req, res, next) => {
    console.log(roles);
    console.log(req.user);
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action", 401)
      );
    }
    next();
  };
};

export { protect, restrictTo };
