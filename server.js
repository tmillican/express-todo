import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import uuidv4 from 'uuid/v4';

import Todo from './models/TodoModel';

const app = express();
const apiRouter = express.Router();
const webRouter = express.Router();

app.set('view engine', 'ejs');
app.locals.layout = false;
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use('/public', express.static('public'));
app.use('/api', apiRouter);
app.use('/', webRouter);

webRouter.get('/', function(req, res) {
  res.render('index');
});

apiRouter.get('/todos', function(req, res, next) {
  Todo.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

apiRouter.get('/todos/:id', function(req, res, next) {
  Todo.find({ _id: req.params.id }, function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

apiRouter.post('/todos/create', function(req, res, next) {
  Todo.create(req.body, function (err, todo) {
    if (err) return next(err);
    res.json(todo);
  });
});

apiRouter.put('/todos/update', function(req, res, next) {
  Todo.findByIdAndUpdate(req.body._id, req.body, function (err, todo) {
    if (err) return next(err);
    res.json(todo);
  });
});

apiRouter.post('/todos/delete', function(req, res, next) {
  Todo.findByIdAndRemove(req.body._id, req.body, function (err, todo) {
    if (err) return next(err);
    res.json(todo);
  });
});

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
