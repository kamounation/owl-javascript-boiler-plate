const { MONGO_URI } = require('./index');

const mongoConfig = {
  url: MONGO_URI,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
    dbName: 'test', // edit to your needs
  },
};

module.exports = mongoConfig;
