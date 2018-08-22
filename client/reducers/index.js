const coolState = {
	loginPage: true,
	usernameTaken: false,
	loginFailed: false,
	username: null,
	profilePicUrl: 'blank_profile_pic.jpg',
	description: null,
	friends: [],
	chats: []
}

const reducer = (state = coolState, action) => {
	switch (action.type) {
		case 'LOG_IN' :
			return {
				...state,
				loginPage: false,
				username: action.payload.username
			}
		case 'USERNAME_TAKEN' : 
			return {
				...state,
				usernameTaken: true
			}
		case 'LOGIN_FAIL' :
			return {
				...state,
				loginFailed: true
			}
		case 'SEND_CHAT' :
			return {
				...state,
				chats: state.chats.concat({username: action.payload.username, message: action.payload.message})
			}
		default : 
			return state
	}
}

export default reducer;