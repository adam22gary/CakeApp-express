const Order = require("./../database/models/order_model");
const BaseCake = require("./../database/models/baseCake_model");

async function baseCake_index(req, res) { 
}

async function showAll(req, res, next) {
    console.log("req.user._id");
    const sendBack = await Order.find({ 'order_userID': req.user._id })
        .catch(() => next("Orders list empty"));
    return res.json(sendBack); 
}

async function show(req, res, next) {
    const { id } = req.params;
    const sendBack = await Order.find({ '_id': id  })
        .catch(() => next("Orders list empty"));
    return res.json(sendBack); 
}

async function new_order(req, res, next) {
    const { id } = req.params;
    const sendBack = await BaseCake.find({ '_id': id })
        .catch(() => next("Orders list empty"));

    return res.json(sendBack);
}

async function create(req, res, next) {
    const { due_date, customer_name, total_people_new, order_description, recipe_name, ingredients_array, total_people, description, total_price } = req.body;
    
    await Order.create({ 
        due_date,
        customer_name,
        total_people_new,
        order_description,
        recipe_name,  
        ingredients_array, 
        total_people,
        description,
        total_price, 
        order_status: "current", 
        order_userID: req.user._id 
    });

    const sendBack = await Order.find({ 'order_userID': req.user._id })
        .catch(() => next("Order is empty"));
    return res.json(sendBack);
};

async function destroy(req, res, next) {
    const { id } = req.params;
    await Order.deleteOne({ '_id': id })
        .catch(() => next("Order list empty"));
    const sendBack = await Order.find({ 'order_userID': req.user._id })
        .catch(() => next("Order list empty"));
    return res.json(sendBack);
}

// async function edit(req, res) {
//     const { id } = req.params;
//     console.log(id);
//     const sendBack = await Order.findOne({ _id: id, 'order_userID': req.user._id })
//         .catch(() => next("Order list empty"));
//     return res.json(sendBack); 
// }

// async function history(req, res, next) {
//     const sendBack = await Order.find({ 'Order_userID': req.user._id })
//         .catch(() => next("Orders list empty"));
//     return res.json(sendBack);
// }

// async function current(req, res, next) {
//     const sendBack = await Order.find({ 'Order_userID': req.user._id })
//         .catch(() => next("Orders list empty"));
//     return res.json(sendBack);
// }

module.exports = {
    create,
    showAll,
    show,
    new_order,
    baseCake_index,
    destroy
}