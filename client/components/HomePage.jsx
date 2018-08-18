import React from 'react';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return {
		username: state.username,
		profilePicUrl: state.profilePicUrl,
		description: state.description,
		friends: state.friends
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		
	}
}

class HomePage extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<h1>Logged In</h1>
		)
	}
}

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageContainer;