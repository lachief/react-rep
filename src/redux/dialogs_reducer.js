const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state, action) =>{
    
    if (action.type === UPDATE_NEW_MESSAGE_TEXT){
        state.newMessageText = action.newText;
    } else if (action.type === SEND_MESSAGE) {
        let body = this._state.dialogsPage.newMessageText;
        state.messages.push({
            id: state.messages.length,
            text: body
        });
        state.newMessageText ='';
    }

    return state;
}

export default dialogsReducer;