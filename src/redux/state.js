import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';
import sidebarReducer from './sidebar_reducer';

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
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar);
		this._renderEntireTree(this._state);
	},
	
}
export default store;
window.store = store;