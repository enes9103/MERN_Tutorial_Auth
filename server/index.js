import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./Routers/userRouter.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// router area
app.use("/users", userRouter);

// start app on localhost 5000 port
app.listen(5000, () => {
  // connect to database
  mongoose.connect(process.env.DB_CONNECTION_STRING)
    .then(() => console.log("connected to db"))
    .catch((error) => console.log(error));
});
