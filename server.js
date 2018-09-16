import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import uuidv4 from 'uuid/v4';

import apiRouter from './routers/apiRouter';
import webRouter from './routers/webRouter';

const app = express();
app.set('view engine', 'ejs');
app.locals.layout = false;
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use('/public', express.static('public'));
app.use('/api', apiRouter);
app.use('/', webRouter);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/express-todo',
                 { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to database.");
    app.listen(3000, '127.0.0.1', () => {
      console.log('Server running at http://localhost:3000');
    });
  })
  .catch((err) => console.error(err));
