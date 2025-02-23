const express = require("express");
const middlewareValidationId = require("../middlewares/validationIdParam");
const pizzaController = require("../controllers/pizzaController");

const router = express.Router();

// Middleware per verificare il parametro ID delle rotte
router.use("/:id", middlewareValidationId);

// Index
router.get("/", pizzaController.index);

// Show
router.get("/:id", pizzaController.show);

// Store
router.post("/", pizzaController.store);

// Update
router.put("/:id", pizzaController.update);

// Modify
router.patch("/:id", pizzaController.modify);

// Delete
router.delete("/:id", pizzaController.destroy);

module.exports = router;
