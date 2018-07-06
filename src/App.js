import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CustomNav from './components/CustomNav';
import Recipe from './components/Recipe';
import Home from './components/Home';
import Blogs from './components/Blogs'
import RecipePost from './components/RecipePost';
import BlogPost from './components/BlogPost';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <CustomNav/>
            <Route exact path="/recipes" component={Recipe} />
            <Route path="/recipes/post" component={RecipePost} />
            <Route exact path="/" component={Home} />
            <Route path="/blog/post" component={BlogPost} />
            <Route path="/blog" component={Blogs} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
