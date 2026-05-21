

/*module.exports = router;*/

const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteControllers");

router.get("/", clienteController.listarClientes);
router.get("/:id", clienteController.buscarClientePorId)



router.post("/:id", clienteController.adicionarCliente);
router.put("/:id", clienteController.atualizarcliente);
router.delete("/:id", clienteController.deletarCliente);


module.exports = router;