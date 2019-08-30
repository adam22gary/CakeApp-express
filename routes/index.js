const express = require("express");
const router = express.Router();
const AuthRoutes = require("./auth_routes");
const BaseCakeRoutes = require("./baseCake_routes");
const IngredientRoutes = require("./ingredient_routes");
const OrderRoutes = require("./order_routes");
const passport = require("passport");

router.get("/", (req, res) => res.send("Hello MOTO"));
router.use("/auth", AuthRoutes);
router.use("/basecakes", passport.authenticate("jwt", { session: false }), BaseCakeRoutes);
router.use("/ingredients", passport.authenticate("jwt", { session: false }), IngredientRoutes);
router.use("/orders", passport.authenticate("jwt", { session: false }), OrderRoutes);

module.exports = router;