const Cliente = require('../models/Cliente')

const cadastrar = async (req,res) => {
    const valores = req.body
    console.log(valores)

    try{
        await Cliente.create(valores)
        res.status(200).json({message: 'Cliente cadastrado'})
    }catch(err){
        console.error('Não foi possível cadastrar o cliente \n',err)
        res.status(500).json({message: 'Não foi possível cadastrar o cliente'})
    }
}

const listar = async (req,res) => {
    try{
        const clientes =  await Cliente.findAll()
        res.status(200).json(clientes) 
    }catch(err){
        console.error('Não foi possível listar os clientes \n',err)
        res.status(500).json({message: 'Não foi possível listar os clientes'})
    }
    
}
module.exports = { cadastrar,listar }