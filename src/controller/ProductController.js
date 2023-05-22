const Product = require('../model/Product')


module.exports = {
    create: async (req, res) => {
        await Product.create(req.body)
        return res.redirect('/products')
    },
    listNome: async (_, res) => {
        let productsList = await Product.findAll()
        productsList = productsList.map(produto => produto.dataValues)
        productsList = productsList.map(produto => produto.name)
        return res.render('products/list', { productsList })
    },
    listMarca: async (_, res) => {
        let productsList = await Product.findAll()
        productsList = productsList.map(produto => produto.dataValues)
        productsList = productsList.map(produto => produto.marca)
        return res.render('products/list2', { productsList })
    },
    form:(_, res) => res.render('products/form'),
    market: async (_, res) => {
        let productsList = await Product.findAll()
        return res.render('products/market', {productsList})
    }
}