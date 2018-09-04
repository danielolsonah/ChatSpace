import React from 'react';
import store from '../store/index.js';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		avatars: state.avatars
	}
}

const AvatarSelector = props => {
	return (
		<div id='AvatarSelector'>
			<div id='AvatarSelectorTitle'>Choose Your Avatar</div>
			<div id='AvatarSquares'>
				{props.avatars.map(avatar => (
					<img className='Avatar' src={avatar} id={avatar} />
				))}
			</div>
		</div>
	)
}

const AvatarSelectorContainer = connect(mapStateToProps)(AvatarSelector);

export default AvatarSelectorContainer;