const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_PAGE = 'CHANGE_PAGE';
const GET_TOTAL_USERS_COUNT = 'GET_TOTAL_USERS_COUNT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const TOGGLE_FOLLOW_LOADING = 'TOGGLE_FOLLOW_LOADING';

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 6,
    currentPage: 1,
    isFetching: false,
    followLoading: {
        id: 0,
        follow: false
    }
}

const usersReducer = (state=initialState, action) => {
    switch (action.type){
        case FOLLOW:
            return ({
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID){
                        return {
                            ...user, 
                            followed: true
                        }
                    }
                    return user
                })
            })
        case UNFOLLOW:
            return ({
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID){
                        return {
                            ...user, 
                            followed: false
                        }
                    }
                    return user
                })
            })
        case SET_USERS:
            return ({
                ...state,
                users: [...action.users]
            })
        case CHANGE_PAGE:
            return ({
                ...state,
                currentPage: action.page
            })
        case GET_TOTAL_USERS_COUNT:
            return ({
                ...state,
                totalUsersCount: action.count
            })
        case TOGGLE_FETCHING:
            return ({
                ...state,
                isFetching: !state.isFetching
            })
        case TOGGLE_FOLLOW_LOADING:
            return ({
                ...state,
                followLoading: {
                    ...state.followLoading, 
                    id: action.id, 
                    follow: action.following,
                }
            })   
        default: return state;
    }
}

export const follow = (userID) => ({
    type: FOLLOW,
    userID
})

export const unfollow = (userID) => ({
    type: UNFOLLOW,
    userID
})

export const setUsers = (users) => ({
    type: SET_USERS,
    users
})

export const changePage = (page) => ({
    type: CHANGE_PAGE,
    page
})

export const getTotalUsersCount = (count) => ({
    type: GET_TOTAL_USERS_COUNT,
    count
})

export const toggleFetching = () => ({
    type: TOGGLE_FETCHING
})

export const toggleFollowLoading = (id, following) => ({
    type: TOGGLE_FOLLOW_LOADING,
    id,
    following
})
export default usersReducer;