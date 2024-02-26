import express from "express";

const app = express();

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

import AppError from "./utils/appError.js";
import errorHandler from "./utils/errorHandler.js";

import rootRouter from "./routes/rootRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import classRoutes from "./routes/classRoutes.js";

// Data sanitization against NoSQL query injection

// Data sanitization against XSS

// Prevent parameter pollution

// Routes
app.use("/api/v1/root", rootRouter);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/class", classRoutes);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler);

export { app };
