import express, { urlencoded } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import routes from "./routes/foods.js";
const app = express();
app.use(express.static("public"));
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

mongoose
  .connect("mongodb://127.0.0.1:27017/foods")
  .then((res) => {
    app.listen("8055", (err) => {
      if (err) return console.log(err);
      console.log("listening on port 8055");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.redirect("/api/foods");
});
app.use("/api/foods", routes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});
