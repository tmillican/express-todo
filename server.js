import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';

import config from './config';
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
mongoose.connect(config.mongoUrl, { useNewUrlParser: true })
  .then(() => {
    console.log(`Connected to database: ${config.mongoUrl}`);
    app.listen(config.port, () => {
      console.log(`Server listening on port ${config.port}.`);
    });
  })
  .catch((err) => console.error(err));
