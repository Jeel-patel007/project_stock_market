'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addIndex('users',['email'],{
      unique:true,
      name:'user_email_unique_index'
    });

    await queryInterface.addIndex('users',['firstname'],{
      name:'user_firstname_index'
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeIndex('users','user_email_unique_index');
    await queryInterface.removeIndex('users','user_firstname_index');
  }
};
