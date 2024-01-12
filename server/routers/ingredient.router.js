const express = require('express');
const ingredient = require('../controllers/ingredient.controller')

const router = express.Router();

router.get('/autocomplete', ingredient.autocomplete);

router.get('/search', ingredient.search);

module.exports = router;
