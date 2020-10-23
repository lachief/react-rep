const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) =>{
    
    if (action.type === ADD_POST){
        if (state.newPostText !== ''){
            let newPost = {
                id: state.posts.length,
                text: state.newPostText,
                likes: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
        }
        else {
            alert('Сообщение не должно быть пустым');
        }
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
    }

    return state;
}

export default profileReducer;