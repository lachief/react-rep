import React from 'react';
import Users from './Users'
import {connect} from 'react-redux';
import { follow, setUsers, unfollow, changePage, getTotalUsersCount, toggleFetching, toggleFollowLoading } from '../../redux/users_reducer';
import { usersAPI } from './../../api/api';


class UsersContainer extends React.Component {

    componentDidMount(){
        this.props.toggleFetching()

        usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.getTotalUsersCount(data.totalCount);
                this.props.toggleFetching();
            })
    }

    
    onPageChanged = (page) => {
        this.props.toggleFetching();
        this.props.changePage(page);

        usersAPI.getUsers(this.props.pageSize, page)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.toggleFetching();
            });
    }

    render(){
        return <Users 
                onPageChanged={this.onPageChanged} 
                users={this.props.users}
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                follow={this.props.follow} 
                unfollow={this.props.unfollow} 
                isFetching={this.props.isFetching}
                userPhoto="https://via.placeholder.com/600/810b14"
                isFollowing={this.props.followLoading}
                toggleFollowing={this.props.toggleFollowLoading}
                usersAPI={usersAPI}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followLoading: state.usersPage.followLoading
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    changePage,
    getTotalUsersCount,
    toggleFetching,
    toggleFollowLoading
    })(UsersContainer);