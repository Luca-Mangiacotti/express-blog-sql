const pizzas = [
  {
    id: 1,
    name: "Margherita",
    image: `http://localhost:3001/pizze/margherita.webp`,
    ingredients: ["pomodoro", "mozzarella"],
  },
  {
    id: 2,
    name: "Marinara",
    image: `http://localhost:3001/pizze/marinara.jpeg`,
    ingredients: ["pomodoro", "aglio", "origano"],
  },
  {
    id: 3,
    name: "Diavola",
    image: `http://localhost:3001/pizze/diavola.jpeg`,
    ingredients: ["pomodoro", "mozzarella", "salame piccante"],
  },
  {
    id: 4,
    name: "Bufalina",
    image: `http://localhost:3001/pizze/bufalina.jpeg`,
    ingredients: ["pomodoro", "mozzarella di bufala"],
  },
  {
    id: 5,
    name: "4 formaggi",
    image: `http://localhost:3001/pizze/4_formaggi.jpeg`,
    ingredients: [
      "pomodoro",
      "mozzarella",
      "gorgonzola",
      "parmigiano",
      "ricotta",
    ],
  },
];

module.exports = pizzas;
