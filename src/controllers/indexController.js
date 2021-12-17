const {validationResult} = require('express-validator');

module.exports = {
	home: (req,res) => {
		return res.render('index',{
			colorForm: `style=background-color:${req.cookies.legendSecret ? req.cookies.legendSecret.colorForm : ""}`
		});
	},
	syc: (req,res) => {
		let errors = validationResult(req);

		const {nombre,color,email,edad} = req.body;
		if (errors.isEmpty()) {
			
			req.session.userLogin = {
				nombreUsuario: nombre,
				colorForm: color,
				emailUsuario: email,
				edadUsuario: edad
			}

			let {nombreUsuario,colorForm,emailUsuario,edadUsuario} = req.session.userLogin;
			let colorSeleccionado;

			switch (true) {
				case colorForm == "red":
					colorSeleccionado = "rojo";
					break;
				case colorForm == "blue":
					colorSeleccionado = "azul";
					break;
				case colorForm == "green":
					colorSeleccionado = "verde";
					break;
				default:
					colorSeleccionado = "negro";
					break;
			}

			if (req.body.rec) {
				res.cookie('legendSecret', req.session.userLogin, {maxAge:1000 * 60 * 10})
			}

			res.send(`
				<!DOCTYPE html>
				<html lang="en">
				<head>
				    <meta charset="UTF-8">
				    <meta http-equiv="X-UA-Compatible" content="IE=edge">
				    <meta name="viewport" content="width=device-width, initial-scale=1.0">
				    <title>Session y cookies</title>
				    <link rel='stylesheet' href='/css/styles.css' />
				</head>
				<body style="background-color:${colorForm}">
					<main>
						<div class="box-form">
							<h1 class="titulo">
								Hola ${nombreUsuario}, elegiste el color: ${colorSeleccionado}, tu email es: ${emailUsuario} y tu edad es: ${edadUsuario ? edadUsuario : ""}
							</h1>
							<a class="link-thx" href="/thanks"><button class="button-form">Gracias ${nombreUsuario}</button></a>
						</div>
					</main>
				</body>
				</html>
			`)
			//res.redirect('/');
		} else{
			return res.render('index', {
				colorForm: `style=background-color:${req.cookies.legendSecret ? req.cookies.legendSecret.colorForm : ""}`,
				errores: errors.mapped(),
				old: req.body
			})
		}
	},
	thanks: (req,res) => {
		res.render('thanks',{
			nombreUsuario: req.session.userLogin.nombreUsuario,
			colorForm: `style=background-color:${req.session.userLogin.colorForm}`
		})
	},
	logout: (req,res) => {
		req.session.destroy();
        res.cookie('legendSecret',null,{maxAge: -1});
        res.redirect('/');
	}
}