import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import AdminController from "./controllers/admin/admin-controller.js";
import ReviewController from "./controllers/reviews/review-controller.js";
import UserController from "./controllers/users/user-controller.js";

const app = express();
app.use(cors());
app.use(express.json());

const CONNECTION_STRING = "fill_in_here";
mongoose.connect(CONNECTION_STRING);

AdminController(app);
ReviewController(app);
UserController(app);
app.get('/', (req, res) => {
    res.send('GoodSounds API')});

app.listen(4000);