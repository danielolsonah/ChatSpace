const db = require('../database/index.js');

const createUser = (username, password) => {
	return db.query(`
			INSERT INTO 
			users 
			(username, password) 
			VALUES 
			('${username}', '${password}')
			`)
}

module.exports.createUser = createUser;