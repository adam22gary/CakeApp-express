const express = require('express');
const router = express.Router();
const { celebrate, Joi } = require('celebrate');
const OrderController = require('./../controllers/Order_controller');

router.get('/', OrderController.baseCake_index);

router.get('/', OrderController.index);

router.get('/new/:id', OrderController.new_order);

router.get('/current', OrderController.current);

router.post('/', celebrate({
    body: {
        date: Joi.string().required(),
        customer_name: Joi.string().required(),
        total_people_new: Joi.number().required(),
        order_description: Joi.string().required(),
        recipe_name: Joi.string().required(),
        ingredients_array: Joi.object().required(),
        total_people: Joi.number().required(),
        description: Joi.string().required(),
        order_status: Joi.string().required(),
        total_price: Joi.number().required(),
        order_userID: Joi.string().required()
      }
    }),
    OrderController.create
);

router.get('/show/:id', OrderController.show);

router.get('/history', OrderController.history);

router.get('/edit/:id', OrderController.edit);

module.exports = router;
