import React from 'react';
import axios from 'axios';
import store from '../store/index.js';
import { connect } from 'react-redux';
import { setAvatar, toggleSelector } from '../actions/index.js'

const mapStateToProps = state => {
	return {
		avatars: state.avatars,
		username: state.username
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setAvatar: url => {
			dispatch(setAvatar(url))
		},
		toggleSelector: () => {
			dispatch(toggleSelector())
		}
	}
}

class AvatarSelector extends React.Component {
	constructor(props) {
		super(props);
		this.setAvatar = this.setAvatar.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	setAvatar(url) {
		axios({
			method: 'post',
			url: '/setAvatar',
			data: {
				username: this.props.username,
				profilepicurl: url
			}
		})
		.then(results => {
			this.props.setAvatar(url);
			this.props.toggleSelector();
		})
		.catch(err => {
			console.log('Avatar post error:\n', err)
		})
	}
	handleClick(e) {
		this.setAvatar(e.target.id)
	}
	render() {
		return (
			<div id='AvatarSelector'>
				<div id='AvatarSelectorTitle'>Choose Your Avatar</div>
				<div id='AvatarSquares'>
					{this.props.avatars.map(avatar => (
						<img className='Avatar' src={avatar} onClick={this.handleClick} id={avatar} />
					))}
				</div>
			</div>
		)
	}
}

const AvatarSelectorContainer = connect(mapStateToProps, mapDispatchToProps)(AvatarSelector);

export default AvatarSelectorContainer;