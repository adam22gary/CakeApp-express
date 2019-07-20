const Order = require("./../database/models/order_model");

async function create(req, res) {
    const { date, customer_name, baseCakes_ID, total_price, order_status } = req.body;
    await Order.create({ date, customer_name, baseCakes_ID, total_price, order_status, order_userID: req.user._id });
    const sendBack = await Order.find({ 'order_userID': req.user._id })
        .catch(() => next("Order empty"));
    return res.json(sendBack);
};

async function edit(req, res) {
    const { id } = req.params;
    console.log(id);
    const sendBack = await Order.findOne({ _id: id, 'order_userID': req.user._id })
        .catch(() => next("Order list empty"));
    return res.json(sendBack); 
}

async function index(req, res) {
    const sendBack = await Order.find({ 'order_userID': req.user._id })
        .catch(() => next("Order list empty"));
    return res.json(sendBack); 
}

async function show(req, res) {
    const { id } = req.params;
    const sendBack = await Order.find({ 'Order_userID': req.user._id, _id: id })
        .catch(() => next("Order list empty"));
    return res.json(sendBack); 
}

module.exports = {
    create,
    edit,
    index,
    show
}