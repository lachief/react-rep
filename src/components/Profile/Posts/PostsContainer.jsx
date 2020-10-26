import React from 'react';
import Posts from './Posts';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/profile_reducer';


const PostsContainer = (props) => {

    let state = props.store.getState();
	const createNewPost = () => {
		props.store.dispatch(addPostActionCreator());
	}

	let onPostChange = (text) => {
		props.store.dispatch(updateNewPostTextActionCreator(text));
	}

	return(
		<Posts updateNewPostText={onPostChange} addPost={createNewPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
	)
}

export default PostsContainer;