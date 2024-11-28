import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import JsonWebToken from "jsonwebtoken";
import cors from "cors";
import route from "./route/con_route.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// MongoDB connection URL
const url = "mongodb://localhost:27017/test-general";

// Route
app.use("/connect", route);

// Connect to MongoDB and start the server
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to the database.");
    app.listen(3000, () => {
      console.log("Server is running on port 3000.");
    });
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err.message);
  });
