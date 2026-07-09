const express = require('express');
const router = express.Router();
const { getAllPesanan, createPesanan, deletePesanan } = require('../controllers/pesananController');

router.get('/pesanan', getAllPesanan);
router.post('/pesanan', createPesanan);
router.delete('/pesanan/:id', deletePesanan);

module.exports = router;