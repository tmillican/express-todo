let config = {};

config.env = process.env['NODE_ENV'] || 'development';
config.mongoUrl = process.env['MONGOLAB_URI'] || 'mongodb://localhost:27017/express-todo';
config.port = process.env['PORT'] || 3000

export default config;
