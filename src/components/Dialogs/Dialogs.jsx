import React from 'react';
import s from './Dialogs.module.css';
import Friends from './Friends/Friends';
import Messages from './Messages/Messages';

const Dialogs = (props) => {
	return(
		<div className={s.dialogs}>
			<Friends friendsList={props.state.friends} />
			<Messages messagesList={props.state.messages}/>
		</div>
	)
}

export default Dialogs;