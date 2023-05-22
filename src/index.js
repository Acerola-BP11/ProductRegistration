const express = require('express')
const path = require('path')


//___________________________________Controladores____________________________________________________-
const ProductController = require('./controller/ProductController')
const HomeController = require('./controller/HomeController')


// __________________________________Configurações de Servidor________________________________________-
const app = express()
app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded())
app.listen(8080, () => {
    console.log('Serviço executando.... Disponivel em http://localhost:8080')
    console.log('Para finalizar, pressione CTRL + C')
})

// Routes

app.get('/', HomeController.home)
app.get('/products/nome', ProductController.listNome)
app.get('/products/marca', ProductController.listMarca)
app.get('/products/form', ProductController.form)
app.post('/products/create', ProductController.create)
app.get('/products/market', ProductController.market)

module.exports = {

}