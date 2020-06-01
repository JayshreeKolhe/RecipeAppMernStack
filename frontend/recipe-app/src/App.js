import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";




import RecipesList from "./Component/recipes-list.component";
import Cheff from "./Component/Chef.component";

import logo from "./logo.png";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { color: "#fcc168" };
  }


  render() {
    return (
      

      <Router>
        <div className="container">
        {/* <div style={{ background: this.state.color }} id="main"> */}
          <nav className="navbar navbar-expand-md navbar-dark bg-info w-100 ">
          
            <a class="navbar-brand" href="https://codingthesmartway.com" >
              <img src={logo} width="45" height="50" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">My Recipe Diary</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Recipes</Link>
                </li>
                
                <li className="navbar-item">
                  <Link to="/createchef" className="nav-link">Add New Recipe</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={RecipesList} /> 
          <Route path="/createchef" component={Cheff} />
        </div>
        {/* </div> */}
      </Router>
      
    );
  }
}

export default App;
