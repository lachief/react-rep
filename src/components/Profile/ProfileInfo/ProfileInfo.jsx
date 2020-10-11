import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	return(
		<div className={s.profileInfo}>
			<div className={s.profileImage}>
				
			</div>
			<div className={s.profileUser}>
				<div className={s.userInfo}>
					<img src="https://yt3.ggpht.com/a/AATXAJwdL2n7p48TvAy8YTa0mBOr_8EseS2NqIchqCuoDg=s900-c-k-c0xffffffff-no-rj-mo" width="120px" height="120px" alt="dsa" />
					<h2>Darth Vader</h2>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo;