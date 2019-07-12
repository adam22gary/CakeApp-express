const Ingredient = require("./../database/models/ingredient_model");

async function create(req, res) {
    //const theModel = new Ingredient();
    const { ingredients_name, ingredients_quantity, ingredients_measurement, ingredients_price } = req.body;
    await Ingredient.create({ ingredients_name, ingredients_quantity, ingredients_measurement, ingredients_price, ingredients_userID: req.user._id });
    const sendBack = await Ingredient.find({ 'ingredients_userID': req.user._id })
        .catch(() => next("Ingredients list empty"));
    return res.json(sendBack);
};

async function index(req, res, next) {
    const sendBack = await Ingredient.find({ 'ingredients_userID': req.user._id })
        .catch(() => next("Ingredients list empty"));
    return res.json(sendBack);
}

async function newMethod(req, res, next) {
    const sendBack = await Ingredient.find({ 'ingredients_userID': req.user._id })
        .catch(() => next("Ingredients list empty"));
    return res.json(sendBack);
}

module.exports = {
    create,
    index,
    newMethod
}