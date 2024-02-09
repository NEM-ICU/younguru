// import * as book from "../controllers/bookController.js";
import { Router } from "express";

const router = Router();

// create new superuser
router.post("/create_new_superuser", book.createBook);

// get all books
router.get("/list", book.getAllBooks);

// // login user route
// router.post("/login", user.loginUser);

export default router;