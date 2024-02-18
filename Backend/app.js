import express from "express";

const app = express();

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

import AppError from "./utils/appError.js";
import errorHandler from "./utils/errorHandler.js";

import superUserRouter from "./routes/superuserRoutes.js";

// Data sanitization against NoSQL query injection

// Data sanitization against XSS

// Prevent parameter pollution

// Routes
app.use("/api/v1/su", superUserRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler);

export { app };
