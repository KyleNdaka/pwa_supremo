

/*module.exports = router;*/

const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteControllers");

router.get("/", clienteController.listarClientes);
router.get("/:id", clienteController.buscarClientePorId)



router.get("/", clienteController.listarClientes);          // GET /clientes
router.get("/:id", clienteController.buscarClientePorId);   // GET /clientes/:id
router.post("/", clienteController.adicionarCliente);       // POST /clientes (Sem o :id aqui!)
router.put("/:id", clienteController.atualizarCliente);     // PUT /clientes/:id
router.delete("/:id", clienteController.deletarCliente);  // DELETE /clientes/:id


module.exports = router;