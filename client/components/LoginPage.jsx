import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/index.js'

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
	}
	render() {
		return (
			<div>
				<h1>Not Logged In</h1>
				<button onClick={this.props.login}>Log In</button>
			</div>
		)
	}
}

const LoginPageContainer = connect(null, mapDispatchToProps)(LoginPage);

export default LoginPageContainer;