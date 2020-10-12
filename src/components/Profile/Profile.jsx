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
			dispatch={props.dispatch}
			newPostText={props.state.newPostText}
			/>
		</div>
	)
}

export default Profile;