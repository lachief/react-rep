import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return(
		<div className={s.post}>
			<div>{props.post}</div>
			<p className={s.postLikes}>Likes: {props.likes}</p>
		</div>
	)
}

export default Post;