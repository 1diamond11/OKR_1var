const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, 'db.json');

function readAnimals() {
    try {
        const data = fs.readFileSync(DB_PATH, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Ошибка при чтении db.json:', error);
        return [];
    }
}

function writeAnimals(animals) {
    try {
        fs.writeFileSync(DB_PATH, JSON.stringify(animals, null, 2), 'utf8');
    } catch (error) {
        console.error('Ошибка при записи в db.json:', error);
    }
}

function generateUniqueId() {
    return Math.random().toString(36).substring(2, 9);
}

module.exports = {
    readAnimals,
    writeAnimals,
    generateUniqueId,
};