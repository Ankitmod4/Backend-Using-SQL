const { DataTypes } = require('sequelize');
const sequelize = require('./Database');

const ChatApp = sequelize.define('chatapps', {
  Username: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
  Password: {
    type: DataTypes.STRING,
    allowNull: false,
    },
 
  
}); 

module.exports = ChatApp;
