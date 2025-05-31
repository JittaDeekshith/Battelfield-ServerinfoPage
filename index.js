// server/index.js

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Allow frontend (React) to access this API
app.use(cors());

// Sample data (this simulates server info)
const serverData = {
  name: "BATTLEFIELD 4 PREMIUM SERVER",
  map: "Operation Locker",
  mode: "Conquest Large",
  players: "56/64",
  ping: "35ms",
  region: "EU West",
  ip: "192.168.1.101",
  settings: {
    ticketCount: 1000,
    friendlyFire: true,
    "3DSpots": false
  }
};

// API endpoint to send the data
app.get('/api/server-info', (req, res) => {
  res.json(serverData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
