const db = require('../database/index.js');

const createUser = (username, password) => {
	return db.query(`
			INSERT INTO 
			users 
			(username, password, profilePicUrl) 
			VALUES 
			('${username}', '${password}', 'blank_profile_pic.jpg')
	`);
}

const checkForUser = (username) => {
	return db.query(`
			SELECT * FROM
			users
			WHERE
			username='${username}'
	`);
}

const checkPassword = (username) => {
	return db.query(`
			SELECT password FROM
			users
			WHERE
			username='${username}'
	`)
}

const fetchProfile = (username) => {
	return db.query(`
			SELECT profilePicUrl, description FROM
			users
			WHERE
			username='${username}'
	`)
}

module.exports.createUser = createUser;
module.exports.checkForUser = checkForUser;
module.exports.checkPassword = checkPassword;
module.exports.fetchProfile = fetchProfile;