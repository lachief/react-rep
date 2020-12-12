import React from 'react';
import Preloader from '../../commons/Preloader';
import User from './User/User';
import './Users.scss';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    
    let pages = [];

    for (let i=1; i<=pagesCount; i++){
        pages.push(i);
    }

    return (
            <div className='users'>
                { props.isFetching ? <Preloader/> : <div className='users-list'>
                    {props.users.map(user => <User 
                    name={user.name}
                    id={user.id} 
                    key={user.id} 
                    follow={props.follow} 
                    unfollow={props.unfollow} 
                    followed={user.followed}
                    status={user.status} 
                    userPhoto={ user.photos.small !== null ? user.photos.small : props.userPhoto }
                    isFollowing={props.isFollowing}
                    toggleFollowing={props.toggleFollowing}
                    usersAPI={props.usersAPI}
                    /> )}
               </div>}
                
                
               
                
                <div className="pages">
                {pages.map((page, i) => <span key={i} className={props.currentPage === page ? 'selected-page page' : 'page'}  
                onClick={ (e) => {
                    props.onPageChanged(page)
                    } }>{page}</span>)}
                </div>
            </div>
    )
}

export default Users;