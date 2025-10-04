const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('yesbro', 'admin', 'ankit123', {
  host: 'database-rds.ci16cm2gu6v2.us-east-1.rds.amazonaws.com', // your RDS endpoint
  dialect: 'mysql',
  port: 3306,
  logging: false, // optional: removes SQL logs from console
});

module.exports = sequelize;
