

/*module.exports = router;*/

const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteControllers");

router.get("/", clienteController.listarClientes);
router.get("/:id", clienteController.buscarClientePorId)

module.exports = router;