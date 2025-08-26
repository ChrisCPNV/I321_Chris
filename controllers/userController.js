let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

const getUsers = (req, res) => {
    res.json(users);
};

const createUser = (req, res) => {
    const { name } = req.body;
    const newUser = { id: users.length + 1, name };
    users.push(newUser);
    res.status(201).json(newUser);
};

module.exports = { getUsers, createUser };
