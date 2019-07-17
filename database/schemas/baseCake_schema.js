const { Schema } = require("mongoose");

const BaseCakeSchema = new Schema({
    recipe_name: {
        type: String,
        required: true
    },
    total_people: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients_array: {
        type: Object,
        required: true
    },
    baseCake_userID: {
        type: String,
        required: true
    }
});

module.exports = BaseCakeSchema;