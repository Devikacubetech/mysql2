const sequelize = require('../config/config');
const Sequelize = require('sequelize');

const Images = sequelize.define('images',{
    id : {
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    image : {
        type : Sequelize.STRING
    },
    coverimage : {
        type : Sequelize.STRING
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',

    tableName: 'images'
});

module.exports = Images;