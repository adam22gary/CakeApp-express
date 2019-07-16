const express = require('express');
const router = express.Router();
const { celebrate, Joi } = require('celebrate');
const OrderController = require('./../controllers/Order_controller');

router.get('/', OrderController.index);

router.post('/new', celebrate({
    body: {
        customer_name: Joi.string().required(),
        date: Joi.string().required(),
        recipe_name: Joi.string().required(),
        total_people: Joi.number().required(),
        description: Joi.string().required(),
        ingredients_array: Joi.string().required(),
        total_price: Joi.number().required(),
        order_status: Joi.string().required(),
    }
}), OrderController.create
);

router.get('/:id', OrderController.show);

router.put('/:id', OrderController.edit);

module.exports = router;
