import React from 'react';
import s from './Header.module.css';

const Header = (props) => {
	return( 
		<div className={s.header}>
			<div className={s.header_image}>
			<div className={s.header__icon}></div>
			</div>
		</div>
	)
}

export default Header;