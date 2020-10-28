import React from 'react';
import Messages from './Messages';
import {sendMessageCreator, updateNewMessageTextCreator} from './../../../redux/dialogs_reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		messages: state.dialogsPage.messages,
		newMessageText: state.dialogsPage.newMessageText
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addMessage: () => {
			dispatch(sendMessageCreator());
		},
		updateNewMessageText: (text) => {
			dispatch(updateNewMessageTextCreator(text));
		}
	}
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;