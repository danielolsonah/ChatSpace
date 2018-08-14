import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/index.js';
import axios from 'axios';

const mapDispatchToProps = (dispatch) => {
	return {
		login: () => {
			dispatch(login());
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
		// axios.post('/createuser', {
		// 	username: this.refs.username,
		// 	password: this.refs.password
		// })
		// .then(results => {
		// 	console.log(results)
		// })
		// .catch(err => {
		// 	console.log(err)
		// })
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
		})
		.catch(err => {
			console.log(err);
		})
	}
	render() {
		return (
			<div>
				<h1>Create New User</h1>
				<input type='text' id='newUser' ref='newUser' placeHolder='Username'/>
				<input type='text' id='newPassword' ref='newPassword' placeHolder='Password'/>
				<button onClick={this.createUser}>Create User</button>
			</div>
		)
	}
}

const LoginPageContainer = connect(null, mapDispatchToProps)(LoginPage);

export default LoginPageContainer;