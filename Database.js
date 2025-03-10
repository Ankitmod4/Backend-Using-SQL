const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sql12766890', 'sql12766890', 'lXVPgJcUkD', {
  host: 'sql12.freesqldatabase.com', 
  dialect: 'mysql',
  port: 3306, 
});

module.exports = sequelize;
