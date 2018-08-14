export const login = () => {
	return {
		type: 'LOG_IN'
	}
}

export const alertUsernameTaken = () => {
	return {
		type: 'USERNAME_TAKEN'
	}
}