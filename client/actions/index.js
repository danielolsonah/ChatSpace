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

export const sendChat = (username, url, message) => {
	return {
		type: 'SEND_CHAT',
		payload: {
			username: username,
			message: message,
			url: url
		}
	}
}

export const loadProfile = (profilePicUrl, description) => {
	return {
		type: 'LOAD_PROFILE',
		payload: {
			profilePicUrl: profilePicUrl,
			description: description
		}
	}
}

export const typing = username => {
	return {
		type: 'TYPING',
		payload: {
			username: username
		}
	}
}

export const stopTyping = () => {
	return {
		type: 'STOP_TYPING'
	}
}

export const toggleSelector = () => {
	return {
		type: 'TOGGLE_SELECTOR'
	}
}

export const setAvatar = (avatar) => {
	return {
		type: 'SET_AVATAR',
		payload: {
			profilepicurl: avatar
		}
	}
}