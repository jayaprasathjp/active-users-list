import express from "express";
import {
    register,
    login,
    dashboard,
    logout
} from "../controllers/user.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/dashboard", dashboard);
router.get("/logout/:id", logout);

export default router;