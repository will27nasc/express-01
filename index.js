const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views/index.html')))
app.get('/', (req, res) => res.send('<h1>Bem vindo</h1>'))

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))