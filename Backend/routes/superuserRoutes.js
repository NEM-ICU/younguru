import * as superUser from "../controllers/superuserController.js";
import {
  createSuperUser,
  createAdmin,
  rootLogin,
} from "../controllers/authController.js";
import {
  restrictTo,
  rootProtect,
} from "../middlewares/accessControlMiddleware.js";

import { Router } from "express";

const router = Router();

// create new Superuser
router.post("/create_new_superuser", createSuperUser);

// create new Admin
router.post("/create_new_admin", rootProtect, createAdmin);

// root login
router.post("/login", rootLogin);

// api test
router.get("/test", rootProtect, restrictTo("root", "user"), superUser.test);

export default router;
