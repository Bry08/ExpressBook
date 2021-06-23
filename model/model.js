let mysql = require('mysql');
let connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'mengmeng',
	database: 'expressbook'
});

connection.connect();//  connect to db credentials

module.exports = connection;
