const express = require('express');
const router = express.Router();
const { celebrate, Joi } = require('celebrate');
const IngredientController = require('./../controllers/Ingredient_controller');

router.get('/', IngredientController.index);

router.delete('/:id', IngredientController.destroy);

router.post('/new', celebrate({
  body: {
    ingredients_name: Joi.string().required(),
    ingredients_quantity: Joi.string().required(),
    ingredients_measurement: Joi.string().required(),
    ingredients_price: Joi.string().required()
    //.number().integer().positive().min(1).required(),
  }
}),
  IngredientController.newMethod
);

router.post(
  '/',
  celebrate({
    body: {
      ingredients_name: Joi.string().required(),
      ingredients_quantity: Joi.string().required(),
      ingredients_measurement: Joi.string().required(),
      ingredients_price: Joi.string().required()
    }
  }),
  IngredientController.create
);

module.exports = router;
