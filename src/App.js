import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';

const App = (props) => {
  return (
      <div className="App">
        <Header />
        <Nav />
        <div className="content">
            <Route path="/profile" render={ () => <Profile store={props.store}/> 
            }/>
            <Route path="/dialogs" render={ () => <Dialogs state={props.state.dialogsPage} store={props.store}/>} />
        </div>
    </div>
  );
}

export default App;
