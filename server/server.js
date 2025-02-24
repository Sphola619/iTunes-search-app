const express = require('express');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;

// Secret key for JWT
const JWT_SECRET = 'your_secret_key';

// Generate JWT token
app.get('/api/token', (req, res) => {
  const token = jwt.sign({ data: 'your_data' }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Middleware to verify JWT
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    jwt.verify(bearerToken, JWT_SECRET, (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        req.authData = authData;
        next();
      }
    });
  } else {
    res.sendStatus(403);
  }
}

// Route to fetch data from iTunes Search API
app.get('/api/search', verifyToken, async (req, res) => {
  try {
    const { term, media } = req.query;
    const response = await axios.get(`https://itunes.apple.com/search`, {
      params: {
        term,
        media
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from iTunes API' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});