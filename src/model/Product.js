const path = require('path')
const { Sequelize , DataTypes} = require('sequelize')

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:path.resolve(__dirname,'..','..','db.sqlite2')
})

//Criando o modelo
const Product = sequelize.define('Product', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING(120),
        allowNull:false
    },
    marca:{
        type: DataTypes.STRING(120),
        allowNull: false
    }
})

Product.sync()

module.exports = Product