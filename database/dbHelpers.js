const db = require('../database/index.js');

const createUser = (username, password) => {
	return db.query(`
			INSERT INTO 
			users 
			(username, password) 
			VALUES 
			('${username}', '${password}')
	`);
}

const checkForUser = (username) => {
	return db.query(`
			SELECT FROM
			users
			WHERE
			username='${username}'
	`);
}

module.exports.createUser = createUser;
module.exports.checkForUser = checkForUser;