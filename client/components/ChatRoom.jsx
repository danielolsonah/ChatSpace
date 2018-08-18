import React from 'react';

class ChatRoom extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id='chatRoom'>
			 	CHAT PLACEHOLDER
				<div id='chatDisplay'></div>
				<div id='chatInput'></div>
			</div>
		)
	}
}

export default ChatRoom;