const { DataTypes } = require('sequelize');
const sequelize = require('./Database');

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
  profession: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
 
}); 

module.exports = Product;
