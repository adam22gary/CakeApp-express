const mongoose = require("mongoose");
const OrderSchema = require("./../schemas/order_schema");

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;