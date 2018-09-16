import express from 'express';

const webRouter = express.Router();

webRouter.get('/', function(req, res) {
  res.render('index');
});

export default webRouter;
