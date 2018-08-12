const coolState = {
	loginPage: true,
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
				homePage: true
			}
		default : 
			return state
	}
}

export default reducer;