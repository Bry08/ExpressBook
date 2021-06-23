const Express = require('express');
const Router = Express.Router();
const InfoController = require('./controller/Controller');
const Info = new InfoController;
let connection = require('./model/model')
let md5 = require('md5');

Router.get('/', Info.index);
Router.post('/register', function (req, res){
	let userData = {
		Fname: req.body.fname,
		Lname: req.body.lname,
		Email: req.body.email,
		Number: req.body.phone,
		Password: md5(req.body.password)
	}

	connection.connect(function(){
		console.log('Connected to SQL!');

	let sql = "INSERT INTO users (first_name, last_name, email, phone, password) VALUES ?";
	let values = [[userData.Fname, userData.Lname, userData.Email, userData.Number, userData.Password]];

	connection.query(sql, [values], function(){
		console.log('Record Inserted');
	})
	});

	res.render('result', userData);
});



module.exports = Router;