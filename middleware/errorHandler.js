const notFound = (req, res, next) => {
    res.status(404).json({ error: "Not Found" });
};

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: err.message || "Something went wrong!" });
};

module.exports = { notFound, errorHandler };
