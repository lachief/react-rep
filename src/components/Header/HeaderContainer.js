import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import {setUserData} from './../../redux/auth_reducer';
import Header from './Header';

class HeaderContainer extends React.Component{
    componentDidMount(){
        axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0){ 
                    let {id, login, email} = response.data.data;
                    this.props.setUserData(id, login, email);
                    console.log(this.props.login)
                }
            })
    }

    render(){
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {setUserData})(HeaderContainer);