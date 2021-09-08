module.exports = {
	user: (req,res) => {
		return res.render('logout', {
			title: 'Logout'
		});
	}
}