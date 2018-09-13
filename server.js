import http from 'http';
import express from 'express';
const app = express();

app.get('/', function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello world!');
});

app.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://localhost:3000');
});
