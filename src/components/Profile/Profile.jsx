import React from 'react';
import s from './Profile.module.css';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return(
		<div className={s.profile}>
			<ProfileInfo />
			<Posts 
			posts={props.state.posts} 
			addPost={props.addPost} 
			newPostText={props.state.newPostText}
			updatePostText={props.updatePostText}/>
		</div>
	)
}

export default Profile;