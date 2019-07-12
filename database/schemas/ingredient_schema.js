const { Schema } = require("mongoose");

const IngredientSchema = new Schema({
    ingredients_name: {
        type: String,
        required: true
    },
    ingredients_quantity: {
        type: String,
        required: true
    },
    ingredients_measurement: {
        type: String,
        required: true
    },
    ingredients_price: {
        type: String,
        required: true
    }
});

module.exports = IngredientSchema;