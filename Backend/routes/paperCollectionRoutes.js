import { createPaperCollection } from "../controllers/paperCollectionController.js";
import { restrictTo, protect } from "../middlewares/accessControlMiddleware.js";

import { Router } from "express";

const router = Router();

// create new Root
router.post("/create_new_paper_collection", protect, createPaperCollection);


export default router;
