const {check} = require('express-validator');

module.exports = [
    check('nombre')
    .notEmpty().withMessage('Escriba su nombre').bail()
    .isAlpha().withMessage('Usar solo caracteres alfábeticos').bail()
    .isLength({
        min: 3
    }).withMessage('El nombre debe tener un mínimo de 3 caracteres'),

    check('color')
    .notEmpty().withMessage('Seleccione un color'),

    check('email')
    .notEmpty().withMessage('Escriba su email').bail()
    .isEmail().withMessage('Debe usar un email válido'),

    check('edad')
    .custom((value,{req}) => {
        if (value != "") {
            if (value >= 1 && value <= 99) {
                return true;
            } else {
                return false;
            }
        }
        return true;
    }).withMessage('Escriba un número')
]