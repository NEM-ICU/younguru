import * as root from "../controllers/rootController.js";
import {
  createRoot,
  createAdminOrEditor,
  createStudent,
  rootLogin,
} from "../controllers/authController.js";
import { restrictTo, protect } from "../middlewares/accessControlMiddleware.js";

import { Router } from "express";

const router = Router();

// create new Root
router.post("/create_new_root", createRoot);

// create new Admin || Editor
router.post("/create_user", protect, restrictTo("root"), createAdminOrEditor);

// create new Student
router.post("/create_student", protect, restrictTo("root"), createStudent);

// root login
router.post("/login", rootLogin);

// api test
router.get("/test", protect, restrictTo("root", "user"), root.test);

export default router;
