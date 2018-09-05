const db = require('../database/index.js');

const createUser = (username, password) => {
	return db.query(`
			INSERT INTO 
			users 
			(username, password, profilePicUrl) 
			VALUES 
			('${username}', '${password}', null)
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

const setAvatar = (username, URL) => {
	return db.query(`
			UPDATE users
			set profilePicUrl = '${URL}'
			WHERE
			username = '${username}'
		`)
}

module.exports.createUser = createUser;
module.exports.checkForUser = checkForUser;
module.exports.checkPassword = checkPassword;
module.exports.fetchProfile = fetchProfile;
module.exports.setAvatar = setAvatar;