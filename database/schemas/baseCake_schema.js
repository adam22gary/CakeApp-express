const { Schema } = require("mongoose");

const BaseCakeSchema = new Schema({
    recipe_name: {
        type: String,
        required: true
    },
    recipe_makes_number: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    method: {
        type: String,
        required: true
    },
    ingredients_array: {
        type: String,
        required: true
    }

    // quantity: {
    //     type: String,
    //     required: true
    // },
    // measurement: {
    //     type: String,
    //     required: true
    // },
    // ingredient: {
    //     type: String,
    //     required: true
    // }
});

module.exports = BaseCakeSchema;