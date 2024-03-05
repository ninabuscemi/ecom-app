const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // Define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    // Sequlize instance
    sequelize,
    // Disregard timestamps in the model
    timestamps: false,
    // Table name same as model name
    freezeTableName: true,
    // Uses underscores instead of camelCase for the column names
    underscored: true,
    // Sets the model name for indentity
    modelName: 'category',
  }
);

module.exports = Category;
