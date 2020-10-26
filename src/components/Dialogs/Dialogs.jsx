import React from 'react';
import s from './Dialogs.module.css';
import Friends from './Friends/Friends';
import MessagesContainer from './Messages/MessagesContainer';

const Dialogs = (props) => {
	return(
		<div className={s.dialogs}>
			<Friends friendsList={props.state.friends} />
			<MessagesContainer store={props.store}/>
		</div>
	)
}

export default Dialogs;