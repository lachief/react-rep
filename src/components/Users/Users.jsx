import React from 'react';
import { setUsersAC } from '../../redux/users_reducer';
import User from './User/User';
import './Users.scss';

const Users = (props) => {

    const users = [
        {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            location: {
                city: "Gwenborough",
                country: "USA"
            },
            status: 'Back to work',
            followed: false,
            photoURL: "https://via.placeholder.com/600/92c952"
        },
        {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv",
            location: {
                city: "Wisokyburgh",
                country: "Russia"
            },
            status: 'I am home',
            followed: false,
            photoURL: "https://via.placeholder.com/600/771796"
        },
        {
            id: 3,
            name: "Clementine Bauch",
            username: "Samantha",
            email: "Nathan@yesenia.net",
            location: {
                city: "McKenziehaven",
                country: "Belarus"
            },
            status: 'Let me alone',
            followed: true,
            photoURL: "https://via.placeholder.com/600/24f355"
        },
        {
            id: 4,
            name: "Patricia Lebsack",
            username: "Karianne",
            email: "Julianne.OConner@kory.org",
            location: {
                city: "South Elvis",
                country: "Russia"
            },
            status: '',
            followed: false,
            photoURL: "https://via.placeholder.com/600/d32776"
        },
        {
            id: 5,
            name: "Chelsey Dietrich",
            username: "Kamren",
            email: "Lucio_Hettinger@annie.ca",
            location: {
                city: "Roscoeview",
                country: "Russia"
            },
            status: 'Hello world',
            followed: true,
            photoURL: "https://via.placeholder.com/600/f66b97"
        },
        {
            id: 6,
            name: "Mrs. Dennis Schulist",
            username: "Leopoldo_Corkery",
            email: "Karley_Dach@jasper.info", 
            location: {
                city: "South Christy",
                country: "Belarus"
            },
            status: '',
            followed: false,
            photoURL: "https://via.placeholder.com/600/56a8c2"
        },
        {
            id: 7,
            name: "Kurtis Weissnat",
            username: "Elwyn.Skiles",
            email: "Telly.Hoeger@billy.biz",
            location: {
                city: "Howemouth",
                country: "Italy"
            },
            status: '',
            followed: false,
            photoURL: "https://via.placeholder.com/600/b0f7cc"
        },
        {
            id: 8,
            name: "Nicholas Runolfsdottir V",
            username: "Maxime_Nienow",
            email: "Sherwood@rosamond.me",
            location: {
                city: "Aliyaview",
                country: "Bolgaria"
            },
            status: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias reprehenderit impedit aut, assumenda qui cupiditate dolorem! Nostrum mollitia incidunt fugiat illo. Deserunt, blanditiis eum! Fugiat non et maxime libero! Dolorum.',
            followed: false,
            photoURL: "https://via.placeholder.com/600/54176f"
        },
        {
            id: 9,
            name: "Glenna Reichert",
            username: "Delphine",
            email: "Chaim_McDermott@dana.io",
            location: {
                city: "Bartholomebury",
                country: 'USA'
            },
            status: '',
            followed: true,
            photoURL: "https://via.placeholder.com/600/51aa97"
        },
        {
            id: 10,
            name: "Clementina DuBuque",
            username: "Moriah.Stanton",
            email: "Rey.Padberg@karina.biz",
            location: {
                country: "Russia",
                city: "Lebsackbury"
            },
            status: '',
            followed: false,
            photoURL: "https://via.placeholder.com/600/810b14"
        }
    ];

    if (props.users.length === 0){
        props.setUsers(users);
    }

    return (
        <div className='users'>
            {props.users.map(user => <User 
            name={user.name}
            id={user.id} 
            key={user.id} 
            follow={props.follow} 
            unfollow={props.unfollow} 
            photo={user.photoURL} 
            location={user.location} 
            nickname={user.username} 
            followed={user.followed}
            status={user.status} /> )}
        </div>
    )
}

export default Users;