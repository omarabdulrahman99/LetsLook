import {BrowserRouter, Route, Switch} from "react-router-dom";
import { useDispatch } from 'react-redux';
import axios from 'axios';

import React, {useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import {fetchUser} from './actions';
import {ContextOne} from "./ContextOne";






function App(props) {

let {state,dispatch} = React.useContext(ContextOne);


  useEffect(()=>{
    fetchUser();
    


  },[JSON.stringify(state.user)])





  async function fetchUser(){
    const userres = await axios.get('/api/current_user');
    console.log('wtfhowmanytimes')
    dispatch({type:"setuser", payload:userres.data})
    return userres.data
  }





  return (
  <BrowserRouter>
    <div className="App">
          <Header/>
          <main className="Appcontainer">
              <Route path="/login" exact component={Login}/>
              <Route path="/signup" exact component={Signup} />
              <Route path="/profile" exact component={Profile} />
          </main>
          <Footer/>
    </div>
  </BrowserRouter>
  );
}

export default App;
