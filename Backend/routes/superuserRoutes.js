import * as superUser from "../controllers/superuserController.js";
import { createSuperUser, createAdmin, rootLogin } from "../controllers/authController.js";

import { Router } from "express";

const router = Router();

// create new Superuser
router.post("/create_new_superuser", createSuperUser);

// create new Admin
router.post("/create_new_admin", createAdmin);

// root login
router.post("/login", rootLogin);


export default router;
