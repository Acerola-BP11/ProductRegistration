const Product = require('../model/Product')

module.exports = {
    create: async (req, res) => {
        await Product.create(req.body)
        return res.redirect('/products')
    },
    list: async (_, res) => {
        const productsList = await Product.findAll()
        return res.render('products/list', { productsList })
    },
    form:(_, res) => res.render('products/form'),
    market: async (_, res) => {
        const productsList = await Product.findAll()
        return res.render('products/market', {productsList})
    }
}