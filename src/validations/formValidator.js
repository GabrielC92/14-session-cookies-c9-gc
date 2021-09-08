const {check} = require('express-validator');

module.exports = [
    check('nombre')
    .notEmpty().withMessage('Escriba su nombre'),

    check('email')
    .isEmail().withMessage('Escriba su email'),

    check('color')
    .notEmpty().withMessage('Escriba su email'),
]