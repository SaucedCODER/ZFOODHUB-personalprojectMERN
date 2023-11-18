import express from "express";
import mongoose from "mongoose";
import {
  GET_ALL_FOOD,
  POST_CREATE_FOOD,
  GET_ONE_FOOD,
  DELETE_FOOD,
  UPDATE_FOOD,
} from "../controller/food.js";

const routes = express.Router();

const checkvalidTypeId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json({
      errorMessage: `no such food`,
    });
  }
  next();
};
//get all foods
routes.get("/", GET_ALL_FOOD);

//create food
routes.post("/", POST_CREATE_FOOD);
//all using params below

//get one specific food
routes.get("/:id", checkvalidTypeId, GET_ONE_FOOD);
//delete food
routes.delete("/:id", checkvalidTypeId, DELETE_FOOD);

//update food
routes.patch("/:id", checkvalidTypeId, UPDATE_FOOD);

export default routes;
