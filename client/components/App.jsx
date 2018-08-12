import React from 'react';
import { connect } from 'react-redux';
import LoginPageContainer from './LoginPage.jsx';
import HomePageContainer from './HomePage.jsx';
import actions from '../actions/index.js';

const mapStateToProps = (state) => {
	return {
		loginPage: state.loginPage,
		homePage: state.homePage,
		username: state.username,
		profilePicUrl: state.profilePicUrl,
		description: state.description,
		friends: state.friends
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		login: () => {
			dispatch(actions.login());
		}
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				{this.props.loginPage ? <LoginPageContainer /> : <HomePageContainer />}
			</div>
		)
	}
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer;