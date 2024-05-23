'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const t = await queryInterface.sequelize.transaction();
    try{
      await queryInterface.createTable('roles', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
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
      },{transaction:t});

      await queryInterface.addConstraint('users',{
        fields:['role_id'],
        type:'foreign key',
        name:'fk_users_role_id',
        references:{
          table:'roles',
          field:'id'
        }, 
        onDelete: 'SET NULL',
        onUpdate:'CASCADE'
      },{transaction:t})

      await t.commit();
    }catch(error){
    await t.rollback();
    }
    
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('roles');
  }
};