const { config } = require('dotenv');

config({});

/**
 * You can  export all your environmental variables from here
 */
const { PORT, MONGO_URI, ENV } = process.env;
module.exports = {
  PORT,
  MONGO_URI,
  ENV,
};
