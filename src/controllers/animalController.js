const animalService = require('../services/animalService');

exports.getAllAnimals = async (req, res) => {
    try {
        const animals = await animalService.getAllAnimals();
        res.status(200).json(animals);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

exports.getAnimalById = async (req, res) => {
    try {
        const animalId = req.params.id;
        const animal = await animalService.getAnimalById(animalId);

        if (!animal) {
            return res.status(404).json({ message: 'Животное не найдено' });
        }

        res.status(200).json(animal);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

exports.createAnimal = async (req, res) => {
    try {
        const { name, age } = req.body;

        if (!name || !age) {
            return res.status(400).json({ message: 'Необходимо указать имя и возраст животного' });
        }

        const newAnimal = await animalService.createAnimal(name, age);
        res.status(201).json(newAnimal);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

exports.updateAnimal = async (req, res) => {
    try {
        const animalId = req.params.id;
        const updatedData = req.body;

        const updatedAnimal = await animalService.updateAnimal(animalId, updatedData);

        if (!updatedAnimal) {
            return res.status(404).json({ message: 'Животное не найдено' });
        }

        res.status(200).json(updatedAnimal);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

exports.incrementAnimalAge = async (req, res) => {
    try {
        const animalId = req.params.id;

        const updatedAnimal = await animalService.incrementAnimalAge(animalId);

        if (!updatedAnimal) {
            return res.status(404).json({ message: 'Животное не найдено' });
        }

        res.status(200).json(updatedAnimal);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

exports.deleteAnimal = async (req, res) => {
    try {
        const animalId = req.params.id;

        const isDeleted = await animalService.deleteAnimal(animalId);

        if (!isDeleted) {
            return res.status(404).json({ message: 'Животное не найдено' });
        }

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};