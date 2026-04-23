const { Sequelize } = require('sequelize')
// Importa a classe Sequelize da biblioteca sequelize


const db = new Sequelize('banco_01','postgres','senai',{
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
})
// Cria a conexão com o banco, com os parametros de (Nome do banco, usuario do banco, senha do usuario)
// Depois ele hosteia o banco na maquina, define o tipo do banco, e a porta padrão do banco


// Pega a promisse e verifica pra ver se deu certo
db.authenticate()
.then(() =>{
    console.log(`Conexão realizada com sucesso`)
    // Se ele encontra a promisse
})

.catch((err)=> {
    console.error('Erro de conexão com o banco de dados \n',err)
    // Se dá erro ao encontrar a promisse
})


module.exports = db
// Exporta a conexão