import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
	
	return(
		<div className={s.message}>
			<span className={s.message__item}>
				{props.textMessage}
			</span>
		</div>
	)
}

export default Message;