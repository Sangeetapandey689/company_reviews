const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const CompanyReview = sequelize.define('CompanyReview', {
  companyName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  industry: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  review: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = CompanyReview;
