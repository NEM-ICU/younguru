import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });
import { app } from "./app.js";
import dbConnect from "./config/db.js";

dbConnect();

const port = process.env.PORT || 3001;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
