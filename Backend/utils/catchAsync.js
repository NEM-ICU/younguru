const catchAsync = (controller) => async (req, res, next) => {
  try {
    await controller(req, res, next);
  } catch (error) {
    return next(error);
  }
};

// const catchAsync = (fn) => {
//   return (req, res, next) => {
//     fn(req, res, next).catch(next);
//   };
// };

export default catchAsync;
