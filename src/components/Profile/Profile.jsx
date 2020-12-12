import React from 'react';
import s from './Profile.module.scss';
import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return(
		<div className={s.profile}>
			<ProfileInfo profile={props.profile}/>
			<PostsContainer />
		</div>
	)
}

export default Profile;