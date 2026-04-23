const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 3000
const hostname = '0.0.0.0' // 127.0.0.1

const conn = require('./db/conn')
const clieteController = require('./controller/client.controller')

// -------------- middleware ----------------
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
// ------------------------------------------

app.post('/cliente', clieteController.cadastrar)
app.get('/clientes', clieteController.listar)

// ------------------------------------------
conn.sync()
.then(()=>{
    app.listen(PORT, hostname,()=>{
        console.log(`Servidor rodando em ${hostname}: ${PORT}`)
    })
})
.catch((err)=>{
    console.error('Erro ao conectar com banco', err)
})