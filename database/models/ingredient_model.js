const mongoose = require("mongoose");
const IngredientSchema = require("./../schemas/ingredient_schema");

const Ingredient = mongoose.model("Ingredient", IngredientSchema);

module.exports = Ingredient;