import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
	_state: {
		profilePage:{
			posts:[
				{
					id: 0,
					text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
					likes: 0
				},
				{
					id: 1,
					text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
					likes: 0
				},
				{
					id: 2,
					text: 'Hello there',
					likes: 0
				}
			],
			newPostText: 'placeholder'
		},
		dialogsPage:{
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
		},
		sidebar: {}
	},
	_renderEntireTree() {
		console.log('');
	},
	
	subscribe(observer) {
		this._renderEntireTree = observer;
	},
	getState() {
		return this._state;
	},
	dispatch(action) {
		if (action.type === ADD_POST){
			if (this._state.profilePage.newPostText !== ''){
				let newPost = {
					id: this._state.profilePage.posts.length,
					text: this._state.profilePage.newPostText,
					likes: 0
				}
				this._state.profilePage.posts.push(newPost);
				this._state.profilePage.newPostText = '';
				this._renderEntireTree(this._state);
			}
			else {
				alert('Сообщение не должно быть пустым');
			}
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._renderEntireTree(this._state);
		} else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
			this._state.dialogsPage.newMessageText = action.newText;
			this._renderEntireTree(this._state);
		} else if (action.type === SEND_MESSAGE) {
			let body = this._state.dialogsPage.newMessageText;
			this._state.dialogsPage.messages.push({
				id: this._state.dialogsPage.messages.length,
				text: body
			});
			this._state.dialogsPage.newMessageText ='';
			this._renderEntireTree(this._state);
		}
	},
	
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
		type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE});	
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});	
export default store;
window.store = store;