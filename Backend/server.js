import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: "./config.env" });
import { app } from "./app.js";
import dbConnect from "./config/db.js";

dbConnect();

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
