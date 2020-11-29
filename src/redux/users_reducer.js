const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_PAGE = 'CHANGE_PAGE';
const GET_TOTAL_USERS_COUNT = 'GET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    totalUsersCount: 54,
    pageSize: 6,
    currentPage: 1
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
        default: return state;
    }
}

export const followAC = (userID) => ({
    type: FOLLOW,
    userID
})

export const unfollowAC = (userID) => ({
    type: UNFOLLOW,
    userID
})

export const setUsersAC = (users) => ({
    type: SET_USERS,
    users
})

export const changePageAC = (page) => ({
    type: CHANGE_PAGE,
    page
})

export const getTotalUsersCountAC = (count) => ({
    type: GET_TOTAL_USERS_COUNT,
    count
})


export default usersReducer;