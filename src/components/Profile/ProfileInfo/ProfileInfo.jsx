
import React from 'react';
import Preloader from '../../../commons/Preloader';
import s from './ProfileInfo.module.scss';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	} 
	return(
		<div className={s.profileInfo}>
			<div className={s.profileImage}></div>
			<div className={s.profileUser}>
				<div className={s.userInfo}>
					<div className={s.userNameImage}>
						<img src={props.profile.photos.large} width="120px" height="120px" alt="dsa" />
						<h2>{props.profile.fullName}</h2>
					</div>
					<div className={s.userDescription}><p>{props.profile.aboutMe}</p></div>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo;