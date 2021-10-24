const {check} = require('express-validator');

module.exports = [
    check('nombre')
    .notEmpty().withMessage('Escriba su nombre').bail()
    .isAlpha().withMessage('Usar solo caracteres alfábeticos'),

    check('color')
    .notEmpty().withMessage('Seleccione un color'),

    check('email')
    .notEmpty().withMessage('Escriba su email').bail()
    .isEmail().withMessage('Debe usar un email válido'),

    check('edad')
    .isInt({
        min: 18,
        max: 99
    }).withMessage('Escriba un número entre 18 y 99')
]