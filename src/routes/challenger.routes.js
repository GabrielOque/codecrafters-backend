import { Router } from "express";

import { getChallengers, createChallenger } from "../controllers/challengers.controllers.js";

const router = Router();

router.post("/create-challenger", createChallenger);
router.get("/get-challengers", getChallengers);

export default router;
