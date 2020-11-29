import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import { followAC, setUsersAC, unfollowAC, changePageAC, getTotalUsersCountAC } from '../../redux/users_reducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        changePage: (page) => {
            dispatch(changePageAC(page));
        },
        getTotalUsersCount: (count) => {
            dispatch(getTotalUsersCountAC(count));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);