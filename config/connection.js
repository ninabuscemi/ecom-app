// Load environment variables from .env file into process.env
require('dotenv').config();

// Import Sequelize library
const Sequelize = require('sequelize');

// Define a Sequelize instance using environment variables
const sequelize = process.env.JAWSDB_URL
  ? // If JAWSDB_URL environment variable is available (indicating a remote database),
    // create a Sequelize instance with the provided URL
    new Sequelize(process.env.JAWSDB_URL)
  : // If JAWSDB_URL is not available (indicating a local database),
    // create a Sequelize instance with individual database credentials
    new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost', // Database host
      dialect: 'mysql', // Database dialect (MySQL in this case)
      dialectOptions: {
        decimalNumbers: true, // Enable support for decimal numbers
      },
    });

// Export the Sequelize instance for use in other modules
module.exports = sequelize;
