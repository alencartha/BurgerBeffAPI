"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        allowNull: false,
        references: { model: "Users", key: "id" },
        type: Sequelize.INTEGER,
      },
      client_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      table: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      status: {
        defaultValue: "preparando",
        type: Sequelize.STRING,
      },
      processedAt: {
        defaultValue: Date.now(),
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Orders");
  },
};
