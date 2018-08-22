import React from 'react';
import { connect } from 'react-redux';
import ChatRoom from './ChatRoom.jsx'

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
			<div id='homePage'>
				<ChatRoom />
				<div id='mainProfile'>
					<img src='blank_profile.pic.png' />
				</div>
			</div>
		)
	}
}

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageContainer;