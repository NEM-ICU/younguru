import catchAsync from "../utils/catchAsync.js";

// Test
const test = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: "hello Bocca!",
  });
});

export { test };
