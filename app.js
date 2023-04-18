import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import AdminController from "./controllers/admin/admin-controller.js";
import ReviewController from "./controllers/reviews/review-controller.js";
import UserController from "./controllers/users/user-controller.js";
import session from "express-session";

const app = express();
app.use(
    session({
        secret: "any string",
        resave: false,
        saveUninitialized: true,
    })
);
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);
app.use(express.json());

const port = process.env.PORT || 4000;
const CONNECTION_STRING = "mongodb://127.0.0.1:27017/goodsounds";
mongoose.connect(CONNECTION_STRING);

AdminController(app);
ReviewController(app);
UserController(app);
app.get('/', (req, res) => {
    res.send('GoodSounds API')});

app.listen(port);