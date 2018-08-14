import React from 'react';
import { connect } from 'react-redux';
import { login, alertUsernameTaken } from '../actions/index.js';
import axios from 'axios';

const mapStateToProps = (state) => {
	return {
		loginPage: state.loginPage,
		usernameTaken: state.usernameTaken,
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
			dispatch(login());
		},
		alertUsernameTaken: () => {
			dispatch(alertUsernameTaken());
		}
	}
}

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.createUser = this.createUser.bind(this);
	}
	createUser() {
		console.log(this.refs.newUser.value);
		axios({
			method: 'post',
			url: '/createuser',
			data: {
				username: this.refs.newUser.value,
				password: this.refs.newPassword.value
			}
		})
		.then(results => {
			console.log(results);
			if (results.data === 'TAKEN') {
				this.props.alertUsernameTaken();
			}
		})
		.catch(err => {
			console.log(err);
		})
	}
	render() {
		console.log('STATE:', this.props)
		return (
			<div>
				<h1>Create New User</h1>
				<input type='text' id='newUser' ref='newUser' placeholder='Username'/>
				{this.props.usernameTaken && 'That username already exists'}
				<input type='text' id='newPassword' ref='newPassword' placeholder='Password'/>
				<button onClick={this.createUser}>Create User</button>
			</div>
		)
	}
}

const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default LoginPageContainer;