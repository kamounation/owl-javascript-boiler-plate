const helmet = require('helmet');
const OwlFactory = require('owl-factory');
const { ENV, PORT } = require('./configs/index');
const mongoConfigs = require('./configs/db');
const ExampleRouter = require('./routes/example.routes');

const server = new OwlFactory([new ExampleRouter()], process.env.PORT || PORT, ENV, {
  mongodbConfig: mongoConfigs,
});

server.app.use(helmet());

server.listen();
