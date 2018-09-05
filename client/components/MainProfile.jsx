import React from 'react';
import { connect } from 'react-redux';
import { loadProfile, toggleSelector } from '../actions/index.js';
import axios from 'axios';

const mapStateToProps = (state) => {
	return {
		username: state.username,
		profilePicUrl: state.profilePicUrl,
		description: state.description
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadProfile: (profilePicUrl, description) => {
			dispatch(loadProfile(profilePicUrl, description));
		},
		toggleSelector: () => {
			dispatch(toggleSelector());
		}
	}
}

class MainProfile extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		axios({
			method: 'get',
			url: `/profile/${this.props.username}`
		})
		.then(results => {
			console.log('Profile pic:', results.data)
			this.props.loadProfile(results.data.profilepicurl, results.data.description);
		})
		.catch(err => {
			console.log('Fetch error:', err);
		})
	}
	render() {
		console.log('PICTURE:', this.props.profilePicUrl)
		return (
			<div id='mainProfile'>
				<div id='profileTitle'>
					{this.props.username}
					<img id='profilePic' src={this.props.profilePicUrl} onClick={this.props.toggleSelector} /> 
				</div>
				<div id='description'>
					<p>{this.props.description}</p>
				</div>
				<div id='friends'>
				</div>
			</div>
		)
	}
}

const MainProfileContainer = connect(mapStateToProps, mapDispatchToProps)(MainProfile);

export default MainProfileContainer;