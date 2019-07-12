async function create(req, res) {
    const { recipe_name, recipe_makes_number, description, method, ingredients_array } = req.body;
    req.user.baseCakes.push({ recipe_name, recipe_makes_number, description, method, ingredients_array });
    await req.user.save();
    res.json(req.user.baseCakes);
}

function index(req, res) {
   return res.json(req.user.baseCakes); 
}

function newMethod(req, res) {
    return res.json(req.user.baseCakes); 
}

module.exports = {
    create,
    index,
    newMethod
} 