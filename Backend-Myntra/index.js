import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import routeIndex from "./Routes/index.js";

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());
app.get("/", (req, res) => {
  res.send("App Working");
});

app.use("/api/v1", routeIndex);
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Connected to DB");
});
app.listen(8001, () => {
  console.log("Server running on port 8001");
});
