import {combineReducers, createStore} from 'redux';
import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';
import sidebarReducer from './sidebar_reducer';
import usersReducer from './users_reducer';
import authReducer from './auth_reducer';


// Хранилище редусеров
let reducersBundle = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

// Создание Store
let store = createStore(reducersBundle);

window.store = store;

export default store;