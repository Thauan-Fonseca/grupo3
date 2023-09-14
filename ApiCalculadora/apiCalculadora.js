const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API');
});

app.post('/addition', (req, res) => {
  const { a, b } = req.body;
  const result = a + b;
  res.json({ result });
});

app.post('/subtract', (req, res) => {
  const { a, b } = req.body;
  const result = a - b;
  res.json({ result });
});

app.post('/divide', (req, res) => {
    const { a, b } = req.body;
    if (b === 0) {
      res.status(400).json({ error: 'Dividir por zero é impossível' });
    } else {
      const result = a / b;
      res.json({ result });
    }
  });
  

app.post('/multiply', (req, res) => {
  const { a, b } = req.body;
  const result = a * b;
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Servidor na porta ${port}`);
});
