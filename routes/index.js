const express = require("express");
const router = express.Router();

const pizzaRoutes = require("../models/pizza");

router.get("/", (req, res) => {
    res.json({ message: "Welcome to Express Skeleton!" });
});

router.use("/pizza", pizzaRoutes);

module.exports = router;
