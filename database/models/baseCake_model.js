const mongoose = require("mongoose");
const BaseCakeSchema = require("./../schemas/baseCake_schema");

const BaseCake = mongoose.model("BaseCake", BaseCakeSchema);

module.exports = BaseCake;