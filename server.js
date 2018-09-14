import express from 'express';
const app = express();

import mongodb from 'mongodb';
const dbClient = mongodb.MongoClient;
const dbUrl = 'mongodb://localhost:27017/express-todo';

app.set('view engine', 'ejs');
app.locals.layout = false;

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
  res.render('index');
});

dbClient.connect(dbUrl, { useNewUrlParser: true }, function(err, db) {
  console.log("Connected to database.");
  app.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://localhost:3000');
  });
});
