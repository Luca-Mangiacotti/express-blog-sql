const pizzasData = require("../data/pizzasData");

// Index
const index = (req, res) => {
  let pizzasFiltered = pizzasData;
  const { ingredient } = req.query;

  if (ingredient) {
    pizzasFiltered = pizzasFiltered.filter((pizza) =>
      pizza.ingredients.includes(ingredient)
    );
  }

  res.json(pizzasFiltered);
};

// Show
const show = (req, res) => {
  const pizza = pizzasData.find((elm) => elm.id == req.params.id);

  if (!pizza) {
    return res.status(404).json({
      error: "Pizza not found",
    });
  }

  res.json(pizza);
};

// Store
const store = (req, res) => {
  const newId = pizzasData[pizzasData.length - 1].id + 1;

  const newPizza = {
    id: newId,
    name: req.body.name,
    image: req.body.image,
    ingredients: req.body.ingredients,
  };

  pizzasData.push(newPizza);

  res.status(201).json(newPizza);
};

// Update
const update = (req, res) => {
  const pizza = pizzasData.find((elm) => elm.id == req.params.id);

  if (!pizza) {
    return res.status(404).json({
      error: "Pizza not found",
    });
  }

  pizza.name = req.body.name;
  pizza.image = req.body.image;
  pizza.ingredients = req.body.ingredients;

  res.json(pizza);
};

// Modify
const modify = (req, res) => {
  const pizza = pizzasData.find((elm) => elm.id == req.params.id);

  if (!pizza) {
    return res.status(404).json({
      error: "Pizza not found",
    });
  }

  if (req.body.name) {
    pizza.name = req.body.name;
  }
  if (req.body.image) {
    pizza.image = req.body.image;
  }
  if (req.body.ingredients) {
    pizza.ingredients = req.body.ingredients;
  }

  res.json(pizza);
};

// Delete
const destroy = (req, res) => {
  const pizza = pizzasData.find((elm) => elm.id == req.params.id);

  if (!pizza) {
    return res.status(404).json({
      error: "Pizza not found",
    });
  }

  pizzasData.splice(pizzasData.indexOf(pizza), 1);

  res.sendStatus(204);
};

module.exports = { index, show, store, update, modify, destroy };
