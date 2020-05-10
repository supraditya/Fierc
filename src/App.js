import React from 'react';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Home from './components/Home';
import Profile from './components/Profile';
import Emergency from './components/Emergency';
import {BrowserRouter, Route} from 'react-router-dom';
import './stylesheets/App.css';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="head-container">
          <p className="site-title">FIERC</p>
          <p className="site-username">username</p>
        </div>
        <Navbar/>
        <MobileNav/>
        <Route exact path='/' component={Home}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/emergency' component={Emergency}/>
      </div>
    </BrowserRouter>
  );
}
export default App;
