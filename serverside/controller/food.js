import Food from "../models/food.js";

export const GET_ALL_FOOD = async (req, res) => {
  const foods = (await Food.find({}).sort({ createdAt: -1 })) || [];
  res.json({ foods, message: "get all food" });
};

export const POST_CREATE_FOOD = async (req, res) => {
  try {
    const newFood = await Food.create(req.body);
    res.json({ newFood });
  } catch (error) {
    res.json({ Error: error.message });
  }
};
export const GET_ONE_FOOD = async (req, res) => {
  const { id } = req.params;
  const food = await Food.findOne({ _id: id });
  if (!food) {
    return res.status(404).json({ error: "food not found" });
  }
  console.log("gumana parin");
  res.json({ food, message: "get one food" });
};

export const DELETE_FOOD = async (req, res) => {
  const { id } = req.params;
  const food = await Food.findOneAndDelete({ _id: id });
  if (!food) {
    return res.status(404).json({ error: "food not found" });
  }
  res.json({ food, message: "deleted a food" });
};

export const UPDATE_FOOD = async (req, res) => {
  const { id } = req.params;
  const food = await Food.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!food) {
    return res.status(404).json({ error: "food not found" });
  }
  res.json({ food, message: "updated a food" });
};
