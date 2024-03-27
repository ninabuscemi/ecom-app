// Import necessary components from the Sequelize library
const { Model, DataTypes } = require('sequelize');
// Import the database connection from the config file
const sequelize = require('../config/connection');

// Define the Product model by extending the Sequelize Model class
class Product extends Model {}

// Define fields and constraints for the Product model
Product.init(
  {
    // Define the ID field with auto-increment, primary key, and not null constraints
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Define the product name field with a not null constraint
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Define the price field with decimal data type and decimal validation
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    // Define the stock field with decimal data type, default value, and numeric validation
    stock: {
      type: DataTypes.DECIMAL,
      allowNull: false, 
      defaultValue: 10,
      validate: {
        isNumeric: true
      }
    },
    // Define the category ID field with references to the category table
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'category',
        key: 'id'
      }
    },
  },
  // Define additional model options
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
