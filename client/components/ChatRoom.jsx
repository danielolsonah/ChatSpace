import React from 'react';
import { connect } from 'react-redux';
import { sendChat, typing, stopTyping } from '../actions/index.js';
import store from '../store/index.js'
const socket = io.connect('http://localhost:1337');

socket.on('connection', socket => {
	console.log('Connected to socket')
})

socket.on('chat', data => {
	console.log('Chat:', data)
	store.dispatch(sendChat(data.username, data.url, data.message));
	store.dispatch(stopTyping());
})

socket.on('typing', data => {
	store.dispatch(typing(data.username));
})

const mapStateToProps = (state) => {
	return {
		username: state.username,
		profilePicUrl: state.profilePicUrl,
		chats: state.chats,
		typing: state.typing
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
		this.handleChatKeyPress = this.handleChatKeyPress.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleClick() {
		socket.emit('chat', {
			username: this.props.username,
			url: this.props.profilePicUrl,
			message: this.refs.chatInput.value
		})
		this.refs.chatInput.value = '';
	}
	handleChatKeyPress(e) {
		if (e.key === 'Enter') {
			this.handleClick();
		}
	}
	handleChange() {
		socket.emit('typing', {
			username: this.props.username
		})
	}
	render() {
		return (
			<div id='chatRoom'>
				<div id='chatDisplay'>
					{this.props.chats.map(chat => (
						<div className='chatEntry'>
							<img className='chatPic' src={chat.url} />
							<div className='chatMessage'>
								<strong>{chat.username}:</strong> 
								{chat.message}
							</div>
						</div>
					))}
					{this.props.typing && <p>{this.props.typing} is typing...</p>}
				</div>
				<div id='chatForm'>
					<input type='text' id='chatInput' placeholder='Type a message...' ref='chatInput' onChange={this.handleChange} onKeyPress={this.handleChatKeyPress} />
					<button onClick={this.handleClick} >Send</button>
				</div>
			</div>
		)
	}
}

const ChatRoomContainer = connect(mapStateToProps, mapDispatchToProps)(ChatRoom);

export default ChatRoomContainer;