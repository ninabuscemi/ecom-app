// Import necessary components from Sequelize library
const { Model, DataTypes } = require('sequelize');

// Import Sequelize instance from connection configuration file
const sequelize = require('../config/connection.js');

// Define Category class, extending Sequelize's Model class
class Category extends Model {}

// Initialize Category model with table attributes and configuration
Category.init(
  {
    // Define 'id' attribute
    id: {
      type: DataTypes.INTEGER, // Data type is INTEGER
      allowNull: false, // Not nullable
      primaryKey: true, // Primary key
      autoIncrement: true, // Auto-incrementing
    },
    // Define 'category_name' attribute
    category_name: {
      type: DataTypes.STRING, // Data type is STRING
      allowNull: false, // Not nullable
    },
  },
  {
    sequelize, // Associate with the Sequelize instance
    timestamps: false, // Disable timestamps (createdAt, updatedAt)
    freezeTableName: true, // Use the model name as the table name
    underscored: true, // Use underscores (_) instead of camelCase for column names
    modelName: 'category', // Model name used in queries
  }
);

// Export the Category model for use in other modules
module.exports = Category;
