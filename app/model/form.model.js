const sequilize = require('../config/config');
const Sequelize = require('sequelize');

const Form = sequilize.define('formdata', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    contact: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',

    tableName: 'categories'
});

module.exports = Form;