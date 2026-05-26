const clientes = require("../../data/clientes");
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

// post

const adicionarCliente = async(req, res) => {
    try{
        const{nome, telefone, enddereco } = req.body;
        const novo__cliente = new clientes{
            Cliente.length + 1,
            nome,
            telefone,
            endereco
            clientes.push(novo__cliente);
            return res.status(201).json({
                sucesso: true,
                mensagem: "Usuario adicionado com sucesso"
            });
        }
    }catch(erro){
        return res.(500).json({
            sucesso: false,
            mensagem: "Erro ao adicionar cliente",
            erro: erro,mesagem
        })}
    };
        // put /clientes/:id - Atualizar um cliente pelo id:

        const atualizarcliente = async (req, res) =>{
            try{
             const { id } = req.params;
             const { nom, telefone, endereco } = req.body
             
             const clientes = clientes.find((c) => c.id == id);
             
             if(!Cliente){
                return res.status(400).json;({
                    sucesso: true;
                    mensagem: `Cliente de id ${id} não encontrad`
                })
             }else{
                clientes.nome = nome;
                clientes.telefone = telefone;
                clientes.endereco = endereco;

                return res.status(200).json({
                    sucesso: true,
                    mensagem: "cliente atualizado com sucesso"
                })
             }
            }catch(error){
                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao atualizar cliente",
                    erro: erro.mensagem
                })
            }
        }

//DELETE /clientes/:id - remove um cliente pelo id 

const deletarCliente = async(req, res) => {
    try{
        const { id } = req.params;
        const index = clientes.findIndex(c => c.id == id);
        if(index === -1){
            return res.status(400).json({
                sucesso: false,
                mensagem: `Cliente de ${id} não encontrado`
            })
        }else{
            clientes.splice(index, 1);
            return res.status(200).json({
                sucesso: true,
                mensagem: `Cliente com ${id} removido com sucesso`
            });
        }
    }catch(erro){
        d
    }
}
module.exports = {
    listarClientes,
    buscarClientePorId,
    adicionarCliente,
    atualizarcliente,
    deletarCliente,
};