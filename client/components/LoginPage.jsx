import React from 'react';
import { connect } from 'react-redux';
import { login, alertUsernameTaken } from '../actions/index.js';
import axios from 'axios';

const mapStateToProps = (state) => {
	return {
		usernameTaken: state.usernameTaken,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		login: (username) => {
			dispatch(login(username));
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
			} else {
				this.props.login(this.refs.newUser.value)
			}
		})
		.catch(err => {
			console.log(err);
		})
	}
	render() {
		return (
			<div id='loginPage'>
				<div id='newUserForm'>
					<h1>Create New User</h1>
					<input type='text' id='newUser' ref='newUser' placeholder='Username'/><br></br>
					{this.props.usernameTaken && 'That username already exists'}<br></br>
					<input type='text' id='newPassword' ref='newPassword' placeholder='Password'/><br></br>
					<button onClick={this.createUser}>Create User</button>
				</div>
				<div id='loginForm'>
				<h1>Log In</h1>
					<input type='text' id='loginUser' ref='loginUser' placeholder='Username'/><br></br>
					<input type='text' id='loginPassword' ref='loginPassword' placeholder='Password'/><br></br>
					<button >Log In</button>
				</div>
			</div>
		)
	}
}

const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default LoginPageContainer;