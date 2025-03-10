const { DataTypes } = require("sequelize");
const sequelize = require("./Database");

const RoomBasedModel = sequelize.define(
  "roombasedmodels",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    room_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    sender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    receiver_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
  },
  { timestamps: true }
);

module.exports = RoomBasedModel;
