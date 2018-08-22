export const login = (username) => {
	return {
		type: 'LOG_IN',
		payload: {
			username: username
		}
	}
}

export const alertUsernameTaken = () => {
	return {
		type: 'USERNAME_TAKEN'
	}
}

export const alertLoginFail = () => {
	return {
		type: 'LOGIN_FAIL'
	}
}

export const sendChat = (username, message) => {
	return {
		type: 'SEND_CHAT',
		payload: {
			username: username,
			message: message
		}
	}
}