const express = require('express')

const app = express()
const port = 3030

app.get('/', (req, res) => res.send('<h1>Página Inicial</h1>'))

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))