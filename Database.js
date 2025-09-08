const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('yesbro', 'root', 'root', {
  host: 'mysql_db', 
  dialect: 'mysql',
  port: 3306, 
});

module.exports = sequelize;
