import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Emergency from './components/Emergency';
import {BrowserRouter, Route} from 'react-router-dom';
import './stylesheets/App.css';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <p className="Site-title">FIERC</p>
        <Navbar/>
        <Route exact path='/' component={Home}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/emergency' component={Emergency}/>
      </div>
    </BrowserRouter>
  );
}
export default App;
