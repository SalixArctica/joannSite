import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CustomNav from './components/CustomNav';
import Recipe from './components/Recipe';
import Home from './components/Home';
import RecipePost from './components/RecipePost'


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <CustomNav/>
            <Route path="/recipes" component={Recipe} />
            <Route path="/recipes/post" component={RecipePost} />
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
