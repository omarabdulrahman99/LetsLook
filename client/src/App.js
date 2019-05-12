import {BrowserRouter, Route, Switch} from "react-router-dom";



import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (

  <BrowserRouter>
    <div className="App">
          <Header/>
          <main className="Appcontainer">
              <Route path="/login" exact component={Login}/>
              <Route path="/signup" exact component={Signup} />
          </main>
          <Footer/>



    </div>
  </BrowserRouter>


  );
}

export default App;
