const {validationResult} = require('express-validator');

module.exports = {
	home: (req,res) => {
		return res.render('index', {
			title: 'Complete el formulario'
		});
	},
	syc: (req,res) => {
		let errors = validationResult(req);
		if (errors.isEmpty()) {
			
		}
	}
}