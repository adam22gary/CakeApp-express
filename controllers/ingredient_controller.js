const Ingredient = require("./../database/models/ingredient_model");

async function create(req, res) {
    //const theModel = new Ingredient();
    const { ingredients_name, ingredients_quantity, ingredients_measurement, ingredients_price } = req.body;
    await Ingredient.create({ ingredients_name, ingredients_quantity, ingredients_measurement, ingredients_price });
    Ingredient.find({}, function(err, list){
        if(err){
            res.send("Ingredients list is empty!");
            next();
        }
        return res.json(list); 
    });
};

async function index(req, res) {
    //{} = all
    Ingredient.find({}, function(err, list){
        if(err){
            res.send("Ingredients list is empty!");
            next();
        }
        return res.json(list); 
    });
}

function newMethod(req, res) {
    Ingredient.find({}, function(err, list){
        if(err){
            res.send("Ingredients list is empty!");
            next();
        }
        return res.json(list); 
    });
}

module.exports = {
    create,
    index,
    newMethod
}