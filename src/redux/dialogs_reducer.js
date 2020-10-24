const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state, action) =>{
    
    switch(action.type){
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageText;
            state.messages.push({
                id: state.messages.length,
                text: body
            });
            state.newMessageText ='';
            return state;
        default: return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});	
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;