const { Schema } = require("mongoose");

const OrderSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    customer_name: {
        type: String,
        required: true
    },
    total_people_new: {
        type: String,
        required: true
    },
    order_description: {
        type: String,
        required: true
    },
    recipe_name: {
        type: String,
        required: true
    },
    ingredients_array: {
        type: Object,
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
    order_status: {
        type: String,
        enum: ["current", "completed", "cancelled"],
        required: true
    },
    total_price: {
        type: Number,
        required: true
    },
    order_userID: {
        type: String,
        required: true
    }
});

module.exports = OrderSchema;