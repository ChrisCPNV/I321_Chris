const express = require("express");
const router = express.Router();

const userRoutes = require("./users");

router.get("/", (req, res) => {
    res.json({ message: "Welcome to Express Skeleton!" });
});

router.use("/users", userRoutes);

module.exports = router;
