import express from "express";
import { getProfile, login, registerUser, updateProfile } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/signup", registerUser);
userRouter.post("/signin", login);
userRouter.get("/profile/:userId", getProfile);
userRouter.patch("/profile/:userId", updateProfile);


export default userRouter;