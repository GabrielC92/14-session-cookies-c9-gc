const {validationResult} = require('express-validator');

module.exports = {
	home: (req,res) => {
		return res.render('index');
	},
	syc: (req,res) => {
		let errors = validationResult(req);

		const {nombre,color,email,edad} = req.body;
		if (errors.isEmpty()) {
			
			req.session.userLogin = {
				nombreUsuario: nombre,
				colorSeleccionado: color,
				emailUsuario: email,
				edadUsuario: edad
			}

			let {nombreUsuario,colorSeleccionado,emailUsuario,edadUsuario} = req.session.userLogin;

			if (req.body.rec) {
				res.cookie('legendSecret', req.session.userLogin, {maxAge:1000 * 60 * 10})
			}
			res.send(`
				<main>
					<div class="box-form">
						<h1 class="titulo">
							Hola ${nombreUsuario}, elegiste el color: ${colorSeleccionado}, tu email es: ${emailUsuario} y tu edad es: ${edadUsuario ? edadUsuario : ""}
						</h1>
					</div>
				</main>
			`)
		} else{
			return res.render('index', {
				title: 'Complete el formulario',
				errores: errors.mapped(),
				old: req.body
			})
		}
	}
}