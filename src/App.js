import React from 'react';
import './App.scss';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  return (
      <div className="App">
        <HeaderContainer />
        <Nav />
        <div className="content">
            <Route path="/profile/:userId?" render={ () => <ProfileContainer /> 
            }/>
            <Route path="/dialogs" render={ () => <Dialogs state={props.state.dialogsPage} store={props.store}/>} />
            <Route path="/users" render={ () => <UsersContainer /> } />
        </div>

    </div>
  );
}

export default App;
