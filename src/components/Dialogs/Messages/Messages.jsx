import React from 'react';
import s from './Messages.module.css';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageTextCreator} from './../../../redux/dialogs_reducer';

const Messages = (props) => {

	const messagesList = props.messages.map((el, index) => {
		return <Message textMessage={el.text} key={el.id}/>
	})
	
	const newMessageText = props.newMessageText;
	const messageArea = React.createRef();
	

	let onSendMessageClick = () => {
		props.addMessage();
	};

	let onUpdateNewMessageText = (e) => {
		let body = e.target.value;
		props.updateNewMessageText(body);
	};

	return(
		<div className={s.messages}>
			<div className={s.messages__list}>
			{messagesList}
			</div>
			<div className={s.newMessage}>
				<textarea ref={messageArea} value={newMessageText} onChange={onUpdateNewMessageText} name="" id="" cols="30" rows="10" placeholder="Enter your message"></textarea>
				<button onClick={onSendMessageClick} className={s.messageButton}>Send message</button>
			</div>
			
			
		</div>
	)
}

export default Messages;