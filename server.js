const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3002;

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get(['/api/spaces', '/api/espacos'], (req, res) => {
  const spacesPath = path.join(__dirname, 'data', 'spaces.json');
  const spaces = JSON.parse(fs.readFileSync(spacesPath, 'utf8'));

  res.json(spaces);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});