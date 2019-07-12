const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const BaseCakeController = require("./../controllers/baseCake_controller");

router.get("/", BaseCakeController.index);

router.post("/new", celebrate({
    body: {
        recipe_name: Joi.string().required(),
        recipe_makes_number: Joi.string().required(),
        description: Joi.string().required(),
        method: Joi.string().required(),
        ingredients_array: Joi.string().required(),
        //add more
    }
}), BaseCakeController.newMethod);

router.post("/", celebrate({
    body: {
        recipe_name: Joi.string().required(),
        recipe_makes_number: Joi.string().required(),
        description: Joi.string().required(),
        method: Joi.string().required(),
        ingredients_array: Joi.string().required(),
    }
}), BaseCakeController.create);

module.exports = router;