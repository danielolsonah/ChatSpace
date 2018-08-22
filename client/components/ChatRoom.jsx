import React from 'react';
import { connect } from 'react-redux';
import { sendChat } from '../actions/index.js';
import store from '../store/index.js'
const socket = io.connect('http://localhost:1337');

socket.on('connection', socket => {
	console.log('Connected to socket')
})

socket.on('chat', data => {
	console.log('Chat:', data)
	store.dispatch(sendChat(data.username, data.message));
})

const mapStateToProps = (state) => {
	return {
		username: state.username,
		chats: state.chats
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		sendChat: (username, message) => {
			dispatch(sendChat(username, message))
		}
	}
}

class ChatRoom extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		socket.emit('chat', {
			username: this.props.username,
			message: this.refs.chatInput.value
		})
	}
	render() {
		return (
			<div id='chatRoom'>
			 	CHAT PLACEHOLDER
				<div id='chatDisplay'>
					{this.props.chats.map(chat => (
						<div className='chatEntry'><img className='chatPic' src={this.props.profilePicUrl} /><strong>{chat.username}:</strong> {chat.message}</div>
					))}
				</div>
				<div id='chatForm'>
					<input type='text' id='chatInput' ref='chatInput' />
					<button onClick={this.handleClick} >Send</button>
				</div>
			</div>
		)
	}
}

const ChatRoomContainer = connect(mapStateToProps, mapDispatchToProps)(ChatRoom);

export default ChatRoomContainer;