const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/api/time', (req, res) => {
  res.json({ time: new Date().toISOString() });
});

app.get('/api/quote', (req, res) => {
  const quotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "In theory, theory and practice are the same. In practice, they’re not.",
    "Simplicity is the soul of efficiency."
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote });
});

app.post('/api/echo', (req, res) => {
  res.json({ received: req.body });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
