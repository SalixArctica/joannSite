import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CustomNav from './components/CustomNav';
import Recipe from './components/Recipe';
import Home from './components/Home';
import Blogs from './components/Blogs'
import RecipeForm from './components/RecipeForm';
import BlogForm from './components/BlogForm';
import Recipes from './components/Recipes';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <CustomNav/>
            <Route exact path="/recipes" component={Recipes} />
            <Route path="/recipes/:id" component={Recipe} />
            <Route path="/recipes/post" component={RecipeForm} />
            <Route exact path="/" component={Home} />
            <Route path="/blog/post" component={BlogForm} />
            <Route path="/blog" component={Blogs} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
