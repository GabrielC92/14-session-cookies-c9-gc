var express = require('express');
var router = express.Router();
const {user} = require('../controllers/usersController');

/* GET users listing. */
router.get('/', user);

module.exports = router;
