import express from 'express';

const app = express();
const port = 5000;

app.get('/api', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
