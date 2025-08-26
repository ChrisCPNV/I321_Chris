require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes");

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Routes
app.use("/api", routes);

// Error handling middleware
const { notFound, errorHandler } = require("./middleware/errorHandler");
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
