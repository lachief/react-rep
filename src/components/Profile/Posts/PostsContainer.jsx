import React from 'react';
import Posts from './Posts';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/profile_reducer';
import {connect} from 'react-redux';


/*const PostsContainer = (props) => {

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
} */

const mapStateToProps = (state) => {
	return{
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addPostActionCreator());
		},
		updateNewPostText: (text) => {
			dispatch(updateNewPostTextActionCreator(text));
		}
	}
	
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;