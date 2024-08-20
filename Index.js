const express = require('express');
const sequelize = require('./Database');
const app = express();
const PORT = 8080;
app.use(express.json());
const router = require('./Route');

app.use('/Api/v1', router);
sequelize.sync()
  .then(() => {
    console.log('Connected to database');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`);
})


 