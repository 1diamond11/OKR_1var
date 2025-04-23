const { readAnimals, writeAnimals, generateUniqueId } = require('../db/db');

exports.getAllAnimals = () => {
    return readAnimals();
};

exports.getAnimalById = (id) => {
    const animals = readAnimals();
    return animals.find((animal) => animal.id === id);
};

exports.createAnimal = (name, age) => {
    const animals = readAnimals();

    const newAnimal = {
        id: generateUniqueId(),
        name,
        age,
        createdAt: new Date().toISOString(),
    };

    animals.push(newAnimal);
    writeAnimals(animals);

    return newAnimal;
};

exports.updateAnimal = (id, updatedData) => {
    const animals = readAnimals();
    const index = animals.findIndex((animal) => animal.id === id);

    if (index === -1) {
        return null;
    }

    animals[index] = { ...animals[index], ...updatedData };
    writeAnimals(animals);

    return animals[index];
};

exports.incrementAnimalAge = (id) => {
    const animals = readAnimals();
    const animal = animals.find((animal) => animal.id === id);

    if (!animal) {
        return null;
    }

    animal.age += 1;
    writeAnimals(animals);

    return animal;
};

exports.deleteAnimal = (id) => {
    const animals = readAnimals();
    const initialLength = animals.length;

    const updatedAnimals = animals.filter((animal) => animal.id !== id);
    writeAnimals(updatedAnimals);

    return updatedAnimals.length !== initialLength;
};