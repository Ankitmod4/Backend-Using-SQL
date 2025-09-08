const express = require('express');
const sequelize = require('./Database'); 
const cors = require('cors');
const http = require('http');


const app = express();

const PORT = 8080;

app.use(cors());
app.use(express.json());

// Import routes
const router = require('./Route');
app.use('/api/v1', router);

// Sync database
sequelize.sync()
  .then(() => console.log('Connected to database'))
  .catch(err => console.error('Unable to connect to the database:', err));
  
  
// Test route
app.get('/', (req, res) => res.send('Hello world'));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
