const Mobil = require('../models/Mobil');

// 1. Ambil Semua Data Mobil (READ)
exports.getAllMobil = async (req, res) => {
    try {
        const mobil = await Mobil.findAll();
        res.json(mobil);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 2. Tambah data Mobil (CREATE)
exports.createMobil = async (req, res) => {
    try {
        const baru = await Mobil.create(req.body);
        res.status(201).json(baru);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 3. Edit data Mobil (UPDATE)
exports.updateMobil = async (req, res) => {
    try {
        await Mobil.update(req.body, { where: { id: req.params.id } });
        res.json({ message: "Data mobil berhasil diperbarui" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 4. Hapus data Mobil (DELETE)
exports.deleteMobil = async (req, res) => {
    try {
        await Mobil.destroy({ where: { id: req.params.id } });
        res.json({ message: "Mobil berhasil dihapus" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};