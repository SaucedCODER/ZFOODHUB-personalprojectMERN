import { Schema, model } from "mongoose";

const FoodSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: ["Please provide food that is not yet added", true],
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Food = model("foods", FoodSchema);
export default Food;
