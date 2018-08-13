'use strict';
module.exports = (sequelize, DataTypes) => {
  var Room = sequelize.define('Room', {
    name: DataTypes.STRING
  }, {});
  Room.associate = function(models) {
    // associations can be defined here
  };
  return Room;
};