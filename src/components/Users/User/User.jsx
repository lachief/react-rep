import React from 'react';
import './User.scss';

const User = (props) => {

    const followUser = () => {
        props.follow(props.id);
    }

    const unfollowUser = () => {
        props.unfollow(props.id);
    }

    const styles = {
        backgroundImage: 'url(' + props.photo + ')'
    }

    return(
        <div className='user'>
            <div className='user-info'>
                <div className='user-intro'>
                    <div className='user-intro__image' style={styles}></div>
                </div>
                <div className='username'>
                    <div className='username__name'><h2>{props.name}</h2></div>
                    <div className='username__nickname'><h4>@{props.nickname}</h4></div>
                    {props.followed ? <button className='username__btn' onClick={ () => {unfollowUser()} }>Unfollow</button> : <button className='username__btn' onClick={ () => {followUser()} }>Follow</button>}
                </div>
            </div>
            {/* <div className='user-status'>
                <i>{props.status}</i>
            </div> */}
            <div className='user-location'>
                <div className='user-location__city'><h2>{props.location.city},</h2></div>
                <div className='user-location__country'><h3>{props.location.country}</h3></div>
            </div>
        </div>
    )
}

export default User;