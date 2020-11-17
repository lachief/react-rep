import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
	
	return(
		<div className={s.message}>
			<p className={s.message__item}>
				{props.textMessage}
			</p>
		</div>
	)
}

export default Message;