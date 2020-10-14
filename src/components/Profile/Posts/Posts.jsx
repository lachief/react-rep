import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';

let addPostActionCreator = () => {
	return {
		type: 'ADD-POST'
	}
}

let updateNewPostTextActionCreator = (text) => {
	return {
		type: 'UPDATE-NEW-POST-TEXT',
		newText: text
	}
}

const Posts = (props) => {
	let postsList = props.posts.map(el => <Post post={el.text} likes={el.likes}/>);

	const textAreaValue = React.createRef();
	
	const createNewPost = () => {
		props.dispatch(addPostActionCreator());
	}

	let onPostChange = () => {
		props.dispatch(updateNewPostTextActionCreator(textAreaValue.current.value));
	}


	return(
		<div className={s.posts}>
			<div className={s.newPost}>
					<textarea ref={textAreaValue} onChange={onPostChange} value={props.newPostText} name="" id="" cols="30" rows="6"></textarea>
					<button onClick={createNewPost}>Add post</button>
			</div>
			{postsList}
		</div>
	)
}

export default Posts;