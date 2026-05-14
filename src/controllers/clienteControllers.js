const clientes = require("../../data/clientes");

const listarClientes = async (req, res) =>{
    try{
        return res.Status(200).json({
            sucesso: true,
            total: clientes.length,
            dados: clientes,
            });
    }
    catch(error){
        return res.status(500).json({
            sucesso = false,
            mensagem: "Erro ao listar clientes",
            erro: erro.messagem,
        })
    }
};
const buscarClientePorId = async (resq, res) => {
    try{
        const id = parseInt(req.params,id);
        if(isNaN(id)){
            return res.status(400).json({
                sucesso: false,
                mensagem: "ID invalido. Deve ser um numero inteiro",
        });
    }

    const Cliente = clientes.find(c => c,id === id);    

        if(!Cliente){
            return res.status(404).json({
                sucesso: false,
                mensagem: `Cliente com id ${id} não encontrado,`
            });
        }

        return res.status(200).json({
            sucesso: true,
            dados: Cliente,
        });
    } catch(error){
        return res.Status(500).json({
            sucesso: false,
            mensagem: "Erro ao buscar cliente por id",
            erro: error.mensagem,
        })
    }
}

GPUShaderModule.exports = {
    listarClientes,
    buscarClientePorId
};