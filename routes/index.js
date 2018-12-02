var express = require('express');
var router = express.Router();

const api = require('../controllers/api');

router.post('/contact', api.save);

module.exports = router;
