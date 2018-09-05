const coolState = {
	loginPage: true,
	usernameTaken: false,
	loginFailed: false,
	username: null,
	profilePicUrl: null,
	avatars: ['https://i.imgur.com/aCz0r5x.jpg', 'https://i.imgur.com/m9IFlUT.jpg', 'https://i.imgur.com/YC5NLMA.jpg', 'https://i.imgur.com/vjnP9QV.jpg', 'https://i.imgur.com/K4fCiqv.jpg', 'https://i.imgur.com/Y7T9gJr.png'],
	selectorOpen: false,
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
				chats: state.chats.concat({username: action.payload.username, url: action.payload.url, message: action.payload.message})
			}
		case 'LOAD_PROFILE' : 
			let open = false;
			if (!action.payload.profilePicUrl) {
				open = true;
			}
			return {
				...state,
				profilePicUrl: action.payload.profilePicUrl,
				description: action.payload.description,
				selectorOpen: open
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
		case 'TOGGLE_SELECTOR' : 
			return {
				...state,
				selectorOpen: !state.selectorOpen
			}
		case 'SET_AVATAR' : 
			return {
				...state,
				profilePicUrl: action.payload.profilepicurl
			}
		default : 
			return state
	}
}

export default reducer;