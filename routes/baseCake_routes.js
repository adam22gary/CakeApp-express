const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const BaseCakeController = require("./../controllers/baseCake_controller");

router.get("/", BaseCakeController.index);

router.get("/show/:id", BaseCakeController.show);

router.delete('/:id', BaseCakeController.destroy);

router.post("/new", celebrate({
    body: {
        recipe_name: Joi.string().required(),
        total_people: Joi.string().required(),
        description: Joi.string().required(),
        ingredients_array: Joi.string().required()
        //add more
    }
}), BaseCakeController.newMethod);

router.get("/edit/:id", BaseCakeController.edit);

router.put("/edit/:id", celebrate({
    body: {
        recipe_name: Joi.string().required(),
        total_people: Joi.string().required(),
        description: Joi.string().required(),
        ingredients_array: Joi.string().required()
        //add more
    }
}), BaseCakeController.update);

router.post("/", celebrate({
    body: {
        recipe_name: Joi.string().required(),
        total_people: Joi.string().required(),
        description: Joi.string().required(),
        ingredients_array: Joi.string().required()
    }
}), BaseCakeController.create);

module.exports = router;