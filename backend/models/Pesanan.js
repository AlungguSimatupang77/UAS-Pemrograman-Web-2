const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Mobil = require('./Mobil');

const Pesanan = db.define('pesanan', {
    namaPenyewa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tanggalMulai: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    durasi: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    totalHarga: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true
});

// Relasi: Satu Mobil bisa disewa di banyak transaksi Pesanan
Mobil.hasMany(Pesanan, { foreignKey: 'mobilId', onDelete: 'CASCADE' });
Pesanan.belongsTo(Mobil, { foreignKey: 'mobilId' });

module.exports = Pesanan;