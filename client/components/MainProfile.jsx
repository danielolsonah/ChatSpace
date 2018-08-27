import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		username: state.username,
		profilePicUrl: state.profilePicUrl,
		description: state.description
	}
}


class MainProfile extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id='mainProfile'>
				<div id='profileTitle'>
					{this.props.username}
				</div>
				<img id='profilePic' src={this.props.profilePicUrl} />
				<div id='description'>
					<p>{this.props.description}</p>
				</div>
				<div id='friends'>
				</div>
			</div>
		)
	}
}

const MainProfileContainer = connect(mapStateToProps)(MainProfile);

export default MainProfileContainer;