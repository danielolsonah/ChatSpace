import React from 'react';
import { connect } from 'react-redux';
import { login, alertUsernameTaken, alertLoginFail } from '../actions/index.js';
import axios from 'axios';

const mapStateToProps = (state) => {
	return {
		usernameTaken: state.usernameTaken,
		loginFailed: state.loginFailed
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		login: (username) => {
			dispatch(login(username));
		},
		alertUsernameTaken: () => {
			dispatch(alertUsernameTaken());
		},
		alertLoginFail: () => {
			dispatch(alertLoginFail());
		}
	}
}

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.createUser = this.createUser.bind(this);
		this.userLogin = this.userLogin.bind(this);
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
	userLogin() {
		console.log(this.refs.loginUser.value, this.refs.loginPassword.value);
		axios({
			method: 'post',
			url: '/login',
			data: {
				username: this.refs.loginUser.value,
				password: this.refs.loginPassword.value
			}
		})
		.then(result => {
			if (result.data === 'FALSE') {
				this.props.alertLoginFail();
			} else {
				this.props.login(this.refs.loginUser.value);
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
					{this.props.loginFailed && 'Username or Password incorrect, please try again'}
					<button onClick={this.userLogin} >Log In</button>
				</div>
			</div>
		)
	}
}

const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default LoginPageContainer;