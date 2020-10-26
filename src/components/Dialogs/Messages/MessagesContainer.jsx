import React from 'react';
import Messages from './Messages';
import {sendMessageCreator, updateNewMessageTextCreator} from './../../../redux/dialogs_reducer';

const MessagesContainer = (props) => {
    let state = props.store.getState().dialogsPage;
	

	let addMessage = () => {
		props.store.dispatch(sendMessageCreator());
	};

	let updateNewMessageText = (text) => {
		props.store.dispatch(updateNewMessageTextCreator(text));
	};

	return(
		<Messages  messages={state.messages} addMessage={addMessage} updateNewMessageText={updateNewMessageText} newMessageText={state.newMessageText}/>
	)
}

export default MessagesContainer;