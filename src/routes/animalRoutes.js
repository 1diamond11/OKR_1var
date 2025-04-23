const express = require('express');
const animalController = require('../controllers/animalController');

const router = express.Router();

router.get('/animals', animalController.getAllAnimals);
router.get('/animals/:id', animalController.getAnimalById);
router.post('/animals', animalController.createAnimal);
router.put('/animals/:id', animalController.updateAnimal);
router.patch('/animals/:id', animalController.incrementAnimalAge);
router.delete('/animals/:id', animalController.deleteAnimal);

module.exports = router;