import { Router } from "express";
import {
    profile,
    signin,
    signout,
    signup,
} from "../controllers/auth.controllers.js";

const router = Router();

router.post("/signin", signin);

router.post("/signup", signup);

router.post("/signout", signout);

router.post("/profile", profile);

export default router;