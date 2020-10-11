import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {
	
	let friendsList = props.friendsList.map(el => <Friend id={el.id} friendItem={el.name}/>);

	return(
		<div className={s.friends}>
			{friendsList}
		</div>
	)
}

export default Friends;