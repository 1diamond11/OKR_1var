const express = require('express');
require('dotenv').config();
const animalRoutes = require('./src/routes/animalRoutes');

const app = express();
const PORT = process.env.PORT || 1315;

app.use(express.json());
app.use('/', animalRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Ошибка сервера', error: err.message });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});