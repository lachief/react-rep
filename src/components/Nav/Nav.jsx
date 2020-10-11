import React from 'react';
import s from './Nav.module.css';
import {NavLink} from 'react-router-dom';

const Nav = (props) => {
	return(
		<div className={s.navbar}>
			<NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
			<NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
			<NavLink to="/news" activeClassName={s.active}>News</NavLink>
			<NavLink to="/music" activeClassName={s.active}>Music</NavLink>
			<NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
			<h2 className={s.friends}>Friends</h2>
			<div className={s.sidebar}>
				<div className={s.sidebar__item}>
					<div></div>
					<p>Obi Wan</p>
				</div>
				<div className={s.sidebar__item}>
					<div></div>
					<p>Emperor</p>
				</div>
				<div className={s.sidebar__item}>
					<div></div>
					<p>Luke</p>
				</div>
			</div>
		</div>
	)
}

export default Nav;