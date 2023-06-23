import express from 'express';

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Express JS on Vercel');
});

app.get('/ping', (req, res) => {
  res.send('pong 🏓');
});

app.listen(port, () => {
  console.warn('[INFO] Server Running on port:', port);
});
