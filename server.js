import http from 'http';
import express from 'express';
const app = express();

app.set('view engine', 'ejs');
app.locals.layout = false;

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://localhost:3000');
});
