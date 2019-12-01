import React, {Component} from 'react';
import './styles/App.css';
import {BrowserRouter as Router, Route,Link} from "react-router-dom"
import Home from './components/Home'
import Login from './components/Login'

class App extends Component{
  render() {
    return (
        <div className="App">
          
          
          <Router>
        <div>
            <nav class="navbar navbar-expand navbar-dark bg-dark">
      
                    <div class="collapse navbar-collapse">  
                      <ul class="navbar-nav">
                          <li class="nav-item ">
                            <a class="nav-link" href="#">{<Link to={"/"}>Home</Link>}</a>
                          </li>
                          <li class="navbar-item ">
                            <a class="nav-link" href="#">{ <Link to={"/login"}>Login</Link>}</a>              
                          </li>
                      </ul> 
                    </div>  
                        
            </nav>   
        </div>    
           
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
          </Router>

        </div>
    );
  }
}

export default App;
