
import React from 'react';
import { NavLink } from 'react-router-dom';
import './User.scss';

const User = (props) => {
    const followUser = () => {
        props.follow(props.id);
    }

    const unfollowUser = () => {
        props.unfollow(props.id);
    }

    return(
        <div className='user'>
            <div className='user-info'>
                <div className='user-intro'>
                    <NavLink to={'/profile/'+props.id}><div className='user-intro__image' style={ {backgroundImage: `url(${props.userPhoto})`} }></div></NavLink>
                </div>
                <div className='username'>
                    <div className='username__name'><h2>{props.name}</h2></div>
                    <div className='username__nickname'><h4>@</h4></div>
                    {props.followed ? 
                    <button disabled={props.isFollowing.id === props.id && props.isFollowing.follow ? true : false} className='username__btn' onClick={ () => {
                        props.toggleFollowing(props.id, true);
                        props.usersAPI.unfollowUser(props.id)
                        .then(response => {
                            if (response.data.resultCode === 0){
                                unfollowUser();
                                props.toggleFollowing(props.id, false);
                            }
                        })
                    }}>
                    {props.isFollowing.id === props.id && props.isFollowing.follow ? 'Loading...' : 'Unfollow'}
                    </button> : 
                    <button disabled={props.isFollowing.id === props.id && props.isFollowing.follow ? true : false} className='username__btn' onClick={ () => {
                        props.toggleFollowing(props.id, true);
                        props.usersAPI.followUser(props.id)
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    followUser();
                                    props.toggleFollowing(props.id, false);
                                }
                            });
                    }}>
                    {props.isFollowing.id === props.id && props.isFollowing.follow ? 'Loading...' : 'Follow'}
                    </button>}
                </div>
            </div>
            {/* <div className='user-status'>
                <i>{props.status}</i>
            </div> */}
            <div className='user-location'>
                <div className='user-location__city'><h2>Moscow,</h2></div>
                <div className='user-location__country'><h3>Russia</h3></div>
            </div>
        </div>
    )
}

export default User;