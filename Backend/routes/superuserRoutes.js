import * as superUser from "../controllers/superuserController.js";
import { createSuperUser } from "../controllers/authController.js";

import { Router } from "express";

const router = Router();

// create new superuser
router.post("/create_new_superuser", createSuperUser);

// get all books
// router.get("/list", book.getAllBooks);

// // login user route
// router.post("/login", user.loginUser);

export default router;
