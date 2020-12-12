import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

const Header = (props) => {
	return( 
		<div className={s.header}>
			<div className={s.header_image}>
				<div className={s.header__icon}></div>
			</div>
			<div className={s.loginBlock}>

				{props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
				

			</div>
		</div>
	)
}

export default Header;