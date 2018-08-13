'use strict';
const uuid = require('uuid/v4');
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Rooms', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: uuid()
			},
			name: {
				type: Sequelize.STRING
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Rooms');
	}
};
