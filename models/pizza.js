const express = require("express");
const router = express.Router();
const { getPizza: getPizza, createPizza } = require("../controllers/pizzaController");

router.get("/", getPizza);
router.post("/", createPizza);

module.exports = router;
