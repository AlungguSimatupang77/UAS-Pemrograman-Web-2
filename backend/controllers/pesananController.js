const Pesanan = require('../models/Pesanan');
const Mobil = require('../models/Mobil');

// 1. Ambil Semua Pesanan beserta data Mobilnya (READ BERELASI)
exports.getAllPesanan = async (req, res) => {
    try {
        const pesanan = await Pesanan.findAll({
            include: Mobil // Ini otomatis menyatukan data Mobil berdasarkan relasi
        });
        res.json(pesanan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 2. Tambah Pesanan Baru (CREATE BERELASI)
exports.createPesanan = async (req, res) => {
    try {
        const { mobilId, namaPenyewa, tanggalMulai, durasi } = req.body;

        // Cari info mobil untuk menghitung total harga sewa
        const mobil = await Mobil.findByPk(mobilId);
        if (!mobil) return res.status(404).json({ message: "Mobil tidak ditemukan" });
        if (mobil.status === 'Disewa') return res.status(400).json({ message: "Mobil sedang tidak tersedia" });

        const totalHarga = mobil.hargaSewa * durasi;

        // Buat data pesanan baru
        const pesananBaru = await Pesanan.create({
            mobilId, namaPenyewa, tanggalMulai, durasi, totalHarga
        });

        // Ubah status mobil menjadi 'Disewa'
        await Mobil.update({ status: 'Disewa' }, { where: { id: mobilId } });

        res.status(201).json(pesananBaru);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 3. Batalkan / Hapus Pesanan (DELETE)
exports.deletePesanan = async (req, res) => {
    try {
        const pesanan = await Pesanan.findByPk(req.params.id);
        if (!pesanan) return res.status(404).json({ message: "Pesanan tidak ditemukan" });

        // Kembalikan status mobil jadi 'Tersedia' sebelum pesanan dihapus
        await Mobil.update({ status: 'Tersedia' }, { where: { id: pesanan.mobilId } });

        await Pesanan.destroy({ where: { id: req.params.id } });
        res.json({ message: "Pesanan berhasil dihapus/selesai" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};