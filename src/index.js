const express = require('express')
const path = require('path')
const app = express()


app.listen(8080, () => {
    console.log('Serviço executando.... Disponivel em http://localhost:8080')
    console.log('Para finalizar, pressione CTRL + C')
})