const BaseCake = require("./../database/models/baseCake_model");

async function create(req, res) {
    const { recipe_name, total_people, description, ingredients_array } = req.body;
    await BaseCake.create({ recipe_name, total_people, description, ingredients_array, baseCake_userID: req.user._id });
    //redirect here
    const sendBack = await BaseCake.find({ 'baseCake_userID': req.user._id })
        .catch(() => next("BaseCake list empty"));
    return res.json(sendBack);
}

async function update(req, res) {
    console.log("here");
    console.log(req.params);
    const { id } = req.params;
    console.log(id);
    const { recipe_name, total_people, description, ingredients_array } = req.body;
    await BaseCake.updateOne({_id: id},{ $set: { "recipe_name": recipe_name, "total_people": total_people, "description": description, "ingredients_array": ingredients_array }});
    //redirect here
    const sendBack = await BaseCake.find({ 'baseCake_userID': req.user._id })
        .catch(() => next("BaseCake list empty"));
    return res.json(sendBack);
}

async function edit(req, res) {
    const { id } = req.params;
    const sendBack = await BaseCake.findOne({ _id: id, 'baseCake_userID': req.user._id })
        .catch(() => next("BaseCake list empty"));
    return res.json(sendBack); 
}

async function index(req, res) {
    const sendBack = await BaseCake.find({ 'baseCake_userID': req.user._id })
        .catch(() => next("BaseCake list empty"));
    return res.json(sendBack); 
}

async function show(req, res) {
    const { id } = req.params;
    console.log("wat up");
    const sendBack = await BaseCake.find({ 'baseCake_userID': req.user._id, _id: id })
        .catch(() => next("BaseCake list empty"));
    return res.json(sendBack); 
}

async function newMethod(req, res) {
    const sendBack = await BaseCake.find({ 'baseCake_userID': req.user._id })
        .catch(() => next("BaseCake list empty"));
    return res.json(sendBack);
}

async function destroy(req, res, next) {
    const { id } = req.params;
    await BaseCake.deleteOne({ '_id': id })
        .catch(() => next("BaseCake list empty"));
    const sendBack = await BaseCake.find({ 'baseCake_userID': req.user._id })
        .catch(() => next("BaseCake list empty"));
    return res.json(sendBack);
}

//save this info
//db.users.find({baseCakes: { $elemMatch: { _id: ObjectId("5d29fa1b2fdead3a2c793d3e")}}})
//db.users.find({baseCakes: { $elemMatch: { _id: ObjectId("5d29fa1b2fdead3a2c793d3e")}}})
//db.getCollection('users').update({},{$pull:{"baseCakes":{"_id": ObjectId("5d29fa1b2fdead3a2c793d3e")}}},{multi:true})
//users.findOneAndDelete({"baseCakes": 'foo'}).then((doc) => {})
module.exports = {
    create,
    update,
    edit,
    index,
    show,
    newMethod,
    destroy
} 