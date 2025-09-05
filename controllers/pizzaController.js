let pizzas = [
    {
        id: 1,
        name: "Margherita",
        ingredients:["mozzarella"]
    },
    {
        id: 2,
        name: "4 Saisons",
        ingredients:["jambon", "champignon frais", "poivrons", "artichauts", "mozzarella"]
    },
    {
        id: 3,
        name: "La DIAVOLA",
        ingredients:["merguez", "salami piquant", "poivrons", "oignons rouge", "artichauts", "mozzarella fior di latte"]
    }
];

const getPizza = (req, res) => {
    res.json(pizzas);
};

const createPizza = (req, res) => {
    const { name } = req.body;
    const newPizza = { id: pizzas.length + 1, name };
    pizzas.push(newPizza);
    res.status(201).json(newPizza);
}

module.exports = { getPizza: getPizza, createPizza: createPizza };
