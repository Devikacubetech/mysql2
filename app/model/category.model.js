const Sequelize = require('sequelize');
const sequelize = require('../config/config');
const Category = sequelize.define('categories',{
  id :{
    type : Sequelize.INTEGER,
    primaryKey : true,
    autoIncrement : true,
    allowNull: false
  },
  name : {
    type : Sequelize.STRING,
    
  },
  slug : {
    type : Sequelize.STRING,
    
  },
  parent_id: {
    type : Sequelize.INTEGER
  },
  status : {
    type : Sequelize.BOOLEAN
  },
  deleted_at: {
    type: Sequelize.DATE 
  }
},{
  timestamps : true,
  createdAt: 'created_at', 
  updatedAt: 'updated_at' ,
  
  tableName : 'categories'
});

// Category.sync()
//   .then(() => {
//     console.log('Category table created or already exists.');
//   })
//   .catch(err => {
//     console.error('Error creating Category table:', err);
//   });

module.exports = Category;