const express = require('express');
const socket = require('socket.io');

const app = express();

app.use(express.static(__dirname + '/../public'));

const server = app.listen(1337, () => {
	console.log('Now listening on port 1337...');
});

const io = socket(server);

io.on('connection', (socket) => {
	console.log('Now connected to socket...')
});