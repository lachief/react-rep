const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
    // {
    //     id: 1,
    //     name: "Leanne Graham",
    //     username: "Bret",
    //     email: "Sincere@april.biz",
    //     location: {
    //         city: "Gwenborough",
    //         country: "USA"
    //     },
    //     status: 'Back to work',
    //     follow: false,
    //     photoURL: "https://via.placeholder.com/600/92c952"
    // },
    // {
    //     id: 2,
    //     name: "Ervin Howell",
    //     username: "Antonette",
    //     email: "Shanna@melissa.tv",
    //     location: {
    //         city: "Wisokyburgh",
    //         country: "Russia"
    //     },
    //     status: 'I am home',
    //     follow: false,
    //     photoURL: "https://via.placeholder.com/600/771796"
    // },
    // {
    //     id: 3,
    //     name: "Clementine Bauch",
    //     username: "Samantha",
    //     email: "Nathan@yesenia.net",
    //     location: {
    //         city: "McKenziehaven",
    //         country: "Belarus"
    //     },
    //     status: 'Let me alone',
    //     follow: true,
    //     photoURL: "https://via.placeholder.com/600/24f355"
    // },
    // {
    //     id: 4,
    //     name: "Patricia Lebsack",
    //     username: "Karianne",
    //     email: "Julianne.OConner@kory.org",
    //     location: {
    //         city: "South Elvis",
    //         country: "Russia"
    //     },
    //     status: '',
    //     follow: false,
    //     photoURL: "https://via.placeholder.com/600/d32776"
    // },
    // {
    //     id: 5,
    //     name: "Chelsey Dietrich",
    //     username: "Kamren",
    //     email: "Lucio_Hettinger@annie.ca",
    //     location: {
    //         city: "Roscoeview",
    //         country: "Russia"
    //     },
    //     status: 'Hello world',
    //     follow: true,
    //     photoURL: "https://via.placeholder.com/600/f66b97"
    // },
    // {
    //     id: 6,
    //     name: "Mrs. Dennis Schulist",
    //     username: "Leopoldo_Corkery",
    //     email: "Karley_Dach@jasper.info", 
    //     location: {
    //         city: "South Christy",
    //         country: "Belarus"
    //     },
    //     status: '',
    //     follow: false,
    //     photoURL: "https://via.placeholder.com/600/56a8c2"
    // },
    // {
    //     id: 7,
    //     name: "Kurtis Weissnat",
    //     username: "Elwyn.Skiles",
    //     email: "Telly.Hoeger@billy.biz",
    //     location: {
    //         city: "Howemouth",
    //         country: "Italy"
    //     },
    //     status: '',
    //     follow: false,
    //     photoURL: "https://via.placeholder.com/600/b0f7cc"
    // },
    // {
    //     id: 8,
    //     name: "Nicholas Runolfsdottir V",
    //     username: "Maxime_Nienow",
    //     email: "Sherwood@rosamond.me",
    //     location: {
    //         city: "Aliyaview",
    //         country: "Bolgaria"
    //     },
    //     status: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias reprehenderit impedit aut, assumenda qui cupiditate dolorem! Nostrum mollitia incidunt fugiat illo. Deserunt, blanditiis eum! Fugiat non et maxime libero! Dolorum.',
    //     follow: false,
    //     photoURL: "https://via.placeholder.com/600/54176f"
    // },
    // {
    //     id: 9,
    //     name: "Glenna Reichert",
    //     username: "Delphine",
    //     email: "Chaim_McDermott@dana.io",
    //     location: {
    //         city: "Bartholomebury",
    //         country: 'USA'
    //     },
    //     status: '',
    //     follow: true,
    //     photoURL: "https://via.placeholder.com/600/51aa97"
    // },
    // {
    //     id: 10,
    //     name: "Clementina DuBuque",
    //     username: "Moriah.Stanton",
    //     email: "Rey.Padberg@karina.biz",
    //     location: {
    //         country: "Russia",
    //         city: "Lebsackbury"
    //     },
    //     status: '',
    //     follow: false,
    //     photoURL: "https://via.placeholder.com/600/810b14"
    // }
]}

const usersReducer = (state=initialState, action) => {
    switch (action.type){
        case FOLLOW:
            return ({
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID){
                        return {...user, followed: true}
                    }
                    return user
                })
            })
        case UNFOLLOW:
            return ({
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID){
                        return {...user, followed: false}
                    }
                    return user
                })
            })
        case SET_USERS:
            return ({
                ...state,
                users: [...state.users, ...action.users]
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


export default usersReducer;