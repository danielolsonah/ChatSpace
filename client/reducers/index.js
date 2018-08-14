const coolState = {
	loginPage: true,
	usernameTaken: false,
	homePage: false,
	username: null,
	profilePicUrl: null,
	description: null,
	friends: []
}

const reducer = (state = coolState, action) => {
	switch (action.type) {
		case 'LOG_IN' :
			return {
				...state,
				loginPage: false,
				homePage: true,
				username: action.payload.username
			}
		case 'USERNAME_TAKEN' : 
			return {
				...state,
				usernameTaken: true
			}
		default : 
			return state
	}
}

export default reducer;