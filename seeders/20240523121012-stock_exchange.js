'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('stock_exchanges',[
    {
      name: 'New York Stock Exchange',
      country: 'USA',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null
    },
    {
      name: 'NASDAQ',
      country: 'USA',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null
    },
    {
      name: 'London Stock Exchange',
      country: 'UK',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null
    },
    {
      name: 'Tokyo Stock Exchange',
      country: 'Japan',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null
    },
    {
      name: 'Shanghai Stock Exchange',
      country: 'China',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null
    }
   ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('stock_exchanges',null,{});
  }
};
