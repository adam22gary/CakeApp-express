const express = require('express');
const router = express.Router();
const { celebrate, Joi } = require('celebrate');
const OrderController = require('./../controllers/Order_controller');

router.get('/', OrderController.baseCake_index);

router.get('/showAll', OrderController.showAll);

router.get('/new/:id', OrderController.new_order);

router.delete('/:id', OrderController.destroy);

router.post('/', celebrate({
    body: {
        due_date: Joi.string().required(),
        customer_name: Joi.string().required(),
        total_people_new: Joi.string().required(),
        order_description: Joi.string().required(),
        recipe_name: Joi.string().required(),
        ingredients_array: Joi.object().required(),
        total_people: Joi.string().required(),
        description: Joi.string().required(),
        total_price: Joi.number().required()
      }
    }),
    OrderController.create
);

router.get('/show/:id', OrderController.show);

// router.get('/edit/:id', OrderController.edit);

module.exports = router;
