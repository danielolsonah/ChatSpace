const express = require('express');
const socket = require('socket.io');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const dbHelpers = require('../database/dbHelpers.js');

const app = express();

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const server = app.listen(1337, () => {
	console.log('Now listening on port 1337...');
});

const io = socket(server);

io.on('connection', (socket) => {
	console.log('Now connected to socket...');
	socket.on('chat', data => {
		console.log('DATA:', data)
		io.sockets.emit('chat', data);
	})
	socket.on('typing', data => {
		socket.broadcast.emit('typing', data);
	})
});

db.connect()
.then(() => {
	console.log('Connected to database...');
})
.catch(err => {
	console.log('PG connection error:\n', err);
})

app.post('/createuser', (req, res) => {
	console.log(req.body)
	dbHelpers.checkForUser(req.body.username)
	.then(userEntry => {
		console.log(userEntry);
		if (userEntry.rowCount !== 0) {
			res.status(200).send('TAKEN')
		} else {
			dbHelpers.createUser(req.body.username, req.body.password)
			.then(results => {
				console.log(results);
				res.status(200).send(results);
			})
			.catch(err => {
				console.log(err);
				res.status(400).send(err);
			})
		}
	})
	.catch(err => {
		console.log(err);
		res.status(400).send(err);	
	})
})

app.post('/login', (req, res) => {
	console.log('REQUEST BODY:', req.body);
	dbHelpers.checkForUser(req.body.username)
	.then(result => {
		if (result.rowCount !== 0) {
			dbHelpers.checkPassword(req.body.username)
			.then(result => {
				console.log('PASSWORD:', result.rows[0].password);
				if (result.rows[0].password !== req.body.password) {
					res.status(201).send('FALSE');
				} else {
					res.status(201).send('OK');
				}
			})
			.catch(err => {
				console.log('Password check error:\n', err);
				res.status(404).send(err);
			})		
		} else {
			res.status(201).send('FALSE');
		}
	})
	.catch(err => {
		console.log('User check error:\n', err);
		res.status(404).send(err);
	})
})

app.get('/profile/:username', (req, res) => {
	dbHelpers.fetchProfile(req.params.username)
	.then(results => {
		console.log('Profile:', results.rows[0])
		res.status(200).send(results.rows[0]);
	})
	.catch(err => {
		console.log('Fetch error:', err)
		res.status(404).send(err);
	})
})

app.post('/setAvatar', (req, res) => {
	dbHelpers.setAvatar(req.body.username, req.body.profilepicurl)
	.then(results => {
		res.status(201).send('Success')
	})
	.catch(err => {
		res.status(400).send(err)
	})
})