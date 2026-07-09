const express = require('express');
const cors = require('cors');
const db = require('./config/database');
const mobilRoutes = require('./routes/mobilRoutes');
const pesananRoutes = require('./routes/pesananRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Menggunakan Routes API
app.use('/api', mobilRoutes);
app.use('/api', pesananRoutes);

// Sinkronisasi dengan Database MySQL
db.sync()
    .then(() => console.log('Mantap! Database & Tabel berhasil sinkron otomatis.'))
    .catch(err => console.log('Waduh, error sinkron database: ' + err));

app.listen(PORT, () => {
    console.log(`Server Backend berjalan di http://localhost:${PORT}`);
});