const express = require('express');
const sequelize = require('./Database'); 
const cors = require('cors');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",  // Allow all origins (Adjust as needed)
    methods: ["GET", "POST"],
  }
}); 

const PORT = 8080;

app.use(cors());
app.use(express.json());

// Import routes
const router = require('./Route');
app.use('/Api/v1', router);

// Sync database
sequelize.sync()
  .then(() => console.log('Connected to database'))
  .catch(err => console.error('Unable to connect to the database:', err));
  
  
// Test route
app.get('/', (req, res) => res.send('Hello world'));

// Start server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
