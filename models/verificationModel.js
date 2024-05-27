const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Verification = sequelize.define('Verification', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  checklistType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  remarks: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: true
});

module.exports = Verification;
