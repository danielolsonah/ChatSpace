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
	console.log('Now connected to socket...')
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
	// dbHelpers.createUser(req.body.username, req.body.password)
	// .then(results => {
	// 	console.log(results);
	// 	res.status(201).send(results);
	// })
	// .catch(err => {
	// 	console.log(err);
	// 	res.status(400).send(err);
	// })
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