
class InfoController{
	index(req, res){
		res.render('index');
	}
	result(req, res){
		let userData = {
			Fname: req.body.fname,
			Lname: req.body.lname,
			Email: req.body.email,
			Phone: req.body.phone,
			Password: req.body.password
		}
		res.render('result', userData);
	}
}

module.exports = InfoController;
