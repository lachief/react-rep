import React from 'react';
import s from './Nav.module.css';
import {NavLink} from 'react-router-dom';
 
const Nav = (props) => {
	return(
		<div className={s.navbar}>
			<NavLink to="/profile" activeClassName={s.active}><i className="fa fa-user-circle" aria-hidden="true"></i> Profile
			</NavLink>
			<NavLink to="/dialogs" activeClassName={s.active}><i className="fa fa-comments-o" aria-hidden="true"></i> Messages</NavLink>
			<NavLink to="/news" activeClassName={s.active}><i className="fa fa-newspaper-o" aria-hidden="true"></i> News</NavLink>
			<NavLink to="/music" activeClassName={s.active}><i className="fa fa-music" aria-hidden="true"></i> Music</NavLink>
			<NavLink to="/settings" activeClassName={s.active}><i className="fa fa-cog" aria-hidden="true"></i> Settings</NavLink>
			<NavLink to="/users" activeClassName={s.active}><h2 className={s.friends}><i className="fa fa-address-book" aria-hidden="true"></i> Friends</h2></NavLink>
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