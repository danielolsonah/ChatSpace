const coolState = {
	loginPage: true,
	usernameTaken: false,
	loginFailed: false,
	username: null,
	profilePicUrl: 'blank_profile_pic.jpg',
	avatars: ['https://i.imgur.com/aCz0r5x.jpg', 'https://i.imgur.com/m9IFlUT.jpg', 'https://i.imgur.com/YC5NLMA.jpg', 'https://i.imgur.com/vjnP9QV.jpg', 'https://i.imgur.com/K4fCiqv.jpg', 'https://i.imgur.com/Y7T9gJr.png'],
	description: null,
	friends: [],
	chats: [],
	typing: null
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
		case 'LOAD_PROFILE' : 
			console.log('this should be....', action.payload.profilePicUrl);
			return {
				...state,
				profilePicUrl: action.payload.profilePicUrl,
				description: action.payload.description
			}
		case 'TYPING' : 
			return {
				...state,
				typing: action.payload.username
			}
		case 'STOP_TYPING' : 
			return {
				...state,
				typing: null
			}
		default : 
			return state
	}
}

export default reducer;