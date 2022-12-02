const express = require('express');
const router = express.Router();
const { createWeathers, getWeathers } = require("../controllers/weathers_controller");

router.post('/api/weather', createWeathers);
router.get('/api/weathers', getWeathers);

module.exports = router