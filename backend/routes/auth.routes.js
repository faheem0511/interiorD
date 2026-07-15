import express from "express";
import { register, login, getAllUser, deleteUser } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/users", getAllUser);
router.delete("/user/:id", deleteUser);
export default router;
