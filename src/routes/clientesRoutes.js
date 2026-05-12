

/*module.exports = router;*/

const express = require ("expresss");
const router = express.roter();
const clienteController = require("../")

router.get("/", clienteController.listarClientes);
route.get("/:id", clienteController.buscarClientePorId)

module.exports = router;