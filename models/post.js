'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    likedNumber: DataTypes.INTEGER/*,
    room_id: {
    	type: DataTypes.INTEGER,
    	references: {
    		model: Room,
    		key: 'id',
    	}
    }*/
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsTo(models.Room, {foreignKey: 'room_id'});
  };
  return Post;
};