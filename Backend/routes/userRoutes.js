import { userLogin } from "../controllers/authController.js";

import { Router } from "express";

const router = Router();

// user login
router.post("/login", userLogin);

export default router;
