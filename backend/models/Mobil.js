const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Mobil = db.define('mobil', {
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipe: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hargaSewa: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('Tersedia', 'Disewa'),
        defaultValue: 'Tersedia'
    }
}, {
    freezeTableName: true
});

module.exports = Mobil;