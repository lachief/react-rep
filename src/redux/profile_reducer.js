const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
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
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) =>{
    
    switch(action.type){

        case ADD_POST:{
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length,
                    text: state.newPostText,
                    likes: 0
                }],
                newPostText: ''
            };
        }

        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state, 
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default: return state;
    
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})
        
export default profileReducer;