import React from 'react';
import s from './Messages.module.css';
import Message from './Message/Message';

const Messages = (props) => {

	const messageList = props.messagesList.map((el, index) => {
		return <Message textMessage={el.text} key={el.index}/>
	})

	return(
		<div className={s.messages}>
			<div className={s.messages__list}>
			{messageList}
			</div>
			
		</div>
	)
}

export default Messages;