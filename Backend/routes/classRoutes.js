import { createClass } from "../controllers/classController.js";

import { restrictTo, protect } from "../middlewares/accessControlMiddleware.js";

import { Router } from "express";

const router = Router();

// create new Root
router.post("/create_new_class", protect, createClass);


export default router;
