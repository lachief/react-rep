const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    friends:[
        {
            id: 1,
            name: 'Boba Fett'
        },
        {
            id: 2,
            name: 'Luke'
        },
        {
            id: 3,
            name: 'Leia'
        },
        {
            id: 4,
            name: 'Emperor Palpatine'
        },
        {
            id: 5,
            name: 'Obi Wan Kenobi'
        },
    ],
    messages:[
        {
            id: 0,
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',				
        },
        {
            id: 1,
            text: 'Hello there'
        },
        {
            id: 2,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero'
        },
        {
            id: 3,
            text: 'Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo perferendis quos provident delectus ducimus necessitatibus reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel odio?'
        },
        {
            id: 4,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate recusandae, repellat animi, fugit consectetur libero accusamus suscipit corporis fuga, adipisci nisi amet unde earum culpa expedita in! Veritatis, rerum labore!'			
        },
        {
            id: 5,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero tempora rem qui accusantium ea modi, fugiat corporis optio dolore, iste quisquam nisi laudantium voluptatibus assumenda soluta itaque in aliquam.'			}
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) =>{
    
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