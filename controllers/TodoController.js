import Todo from '../models/TodoModel';

export class TodoController {
  static findAll(req, res, next) {
    Todo.find(function (err, todos) {
      if (err) return next(err);
      res.json(todos);
    });
  }

  static find(req, res, next) {
    Todo.find({ _id: req.params.id }, function (err, todos) {
      if (err) return next(err);
      res.json(todos);
    });
  }

  static create(req, res, next) {
    Todo.create(req.body, function (err, todo) {
      if (err) return next(err);
      res.json(todo);
    });
  }

  static create(req, res, next) {
    Todo.create(req.body, function (err, todo) {
      if (err) return next(err);
      res.json(todo);
    });
  }

  static update(req, res, next) {
    Todo.findByIdAndUpdate(req.body._id, req.body, { new: true }, function (err, todo) {
      if (err) return next(err);
      res.json(todo);
    });
  }

  static delete(req, res, next) {
    Todo.findByIdAndRemove(req.body._id, req.body, function (err, todo) {
      if (err) return next(err);
      res.json(todo);
    });
  }
}
