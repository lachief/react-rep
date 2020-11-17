import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';


const Posts = (props) => {
	let postsList = props.posts.map(el => <Post post={el.text} likes={el.likes}/>);

	const textAreaValue = React.createRef();
	
	const createNewPost = () => {
		props.addPost();
	}

	let onPostChange = (e) => {
		props.updateNewPostText(e.target.value);
	}


	return(
		<div className={s.posts}>
			<div className={s.newPost}>
					<textarea ref={textAreaValue} onChange={onPostChange} value={props.newPostText} name="" id="" cols="30" rows="6"></textarea>
					<button className={s.postButton} onClick={createNewPost}>Add post</button>
			</div>
			{postsList}
		</div>
	)
}

export default Posts;