var express = require('express');
var router = express.Router();
const {home, syc, thanks, logout} = require('../controllers/indexController');
const formValidator = require('../validations/formValidator');

/* GET home page. */
router
    .get('/', home)
    .post('/', formValidator, syc)
    .get('/thanks', thanks)
    .get('/logout', logout)

module.exports = router;