var express = require('express');
var router = express.Router();
const {home, syc} = require('../controllers/indexController');
const formValidator = require('../validations/formValidator');

/* GET home page. */
router
    .get('/', home)
    .post('/', formValidator, syc)

module.exports = router;
