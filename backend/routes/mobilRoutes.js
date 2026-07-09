const express = require('express');
const router = express.Router();
const { getAllMobil, createMobil, updateMobil, deleteMobil } = require('../controllers/mobilController');

router.get('/mobil', getAllMobil);
router.post('/mobil', createMobil);
router.put('/mobil/:id', updateMobil);
router.delete('/mobil/:id', deleteMobil);

module.exports = router;