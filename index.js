const path = require('path');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views', '/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/views', '/about.html'));
});

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, '/views', '/contact-me.html'));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '/views', '/404.html'));
});

app.listen(8080, () => {
  console.log('Server running...');
});
