import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import UserController from "./controllers/users/user-controller.js";

const app = express();
app.use(cors());
app.use(express.json());

UserController(app);
app.listen(4000);