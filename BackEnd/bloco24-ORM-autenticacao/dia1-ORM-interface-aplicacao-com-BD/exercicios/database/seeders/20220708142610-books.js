'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('books', [{
       tittle: 'Doctor Sleep',
       author: 'Stephen King',
       page_quantity: 475,
       created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
       updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
     
  }
};
