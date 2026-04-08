const { Sequelize } = require('sequelize')

const db = new Sequelize('banco_01','postgres','senai',{
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
})

db.authenticate()
.then(() =>{
    console.log(`Conexão realizada com sucesso`)
})

.catch((err)=> {
    console.error('Erro de conexão com o banco de dados \n',err)
})


module.exports = db