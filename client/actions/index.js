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