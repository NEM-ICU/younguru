import User from "../models/userModel.js";
import AppError from "../utils/appError.js";
import Jwt from "jsonwebtoken";
import catchAsync from "../utils/catchAsync.js";
import Superuser from "../models/superuserModel.js";

const rootProtect = catchAsync(async (req, res, next) => {
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
  console.log(decoded);

  //check if user still exist
  const root = await Superuser.findById(decoded.id);
  if (!root) {
    return next(
      new AppError("the user belonging to this token does no longer exist", 401)
    );
  }

  //Grant access protected ROUTE
  req.user = decoded.id;
  next();
});

export { rootProtect };
