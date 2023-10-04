const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const Review = sequelize.define('Review', {
  companyName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pros: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  cons: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const sequelize = require('./util/database');

sequelize.sync()
  .then(() => {
    console.log('Database and tables synced');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

module.exports = Review;
