const passport = require("passport");
const UserModel = require("./../database/models/user_model");

passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

passport.use(UserModel.createStrategy());

module.exports = passport;