const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MainRouter = require('./router');
const server = app.listen('8001', function(){
	console.log('Listening at port 8001');
})
const socket = require('socket.io');
const Controller = require('./controller/Controller')
let io = socket(server);

let participants = [];

io.on('connection', function(socket){
	console.log('Made Socket Connection');

	socket.on('welcome', function(data){
		io.emit('hi', {
			fullName: data.fname+' '+data.lname
		});//eto yung ikakalat mo na sa ibang server// callback function
	});

	socket.on('send', function(data){
		io.emit('sent', {
			fullName: data.fname+' '+data.lname,
			message: data.message,
			hours: data.hours,
			minutes: data.minutes,
			seconds: data.seconds,
			am_pm: data.am_pm
		});
	});

	socket.on('participants', function(data){
		participants.push(data.fname + ' ' + data.lname);
		io.emit('participant', participants)
	})
});

app.use(express.static('./views'));
app.set('views', './views');

app.use(bodyParser.urlencoded({extended:true}));

app.use(MainRouter);

