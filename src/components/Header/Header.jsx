import React from 'react';
import s from './Header.module.css';

const Header = (props) => {
	return( 
		<div className={s.header}>
			<div className={s.header_image}>
			<img src="https://yt3.ggpht.com/a/AATXAJy6ibK8eU-i-7q3DAyOe929vKR-hqAsDf9ols_p=s900-c-k-c0xffffffff-no-rj-mo" width="50px" height="50px" alt="placeholder+image" />
			</div>
		</div>
	)
}

export default Header;