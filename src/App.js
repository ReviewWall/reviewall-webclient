import React, {Component} from 'react';
import './styles/App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from './components/Home'
import SignIn from './components/Login'
import Register from './components/Register'
import Enter from './components/Enter'
import Reading from './components/Reading'
import Profile from './components/Profile'

class App extends Component{
  render() {
    return (
        <div className="App scrollarea">
          <Router>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={SignIn}/>
            <Route path="/register" component={Register}/>
            <Route path="/enter" component={Enter}/>
            <Route path="/reading" component={Reading}/>
            <Route path= "/profile" component={Profile}/>
          </Router>

        </div>
    );
  }
}

export default App;
