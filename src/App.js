import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CustomNav from './components/CustomNav';
import Recipe from './components/Recipe';
import Home from './components/Home';
import Blogs from './components/Blogs'
import RecipeForm from './components/RecipeForm';
import BlogForm from './components/BlogForm';
import Recipes from './components/Recipes';

class App extends Component {
  constructor(){
    super();
    this.state = {};
  }

  getUser = (user) => {
    this.setState({user});
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <CustomNav passUser={this.getUser}/>
            <Route exact path="/recipes" component={Recipes} />
            <Route exact path="/recipes/:id" component={()=><Recipe user={this.state.user} />} />
            <Route exact path="/recipes/post" component={RecipeForm} />
            <Route exact path="/" component={Home} />
            <Route path="/blog/post" component={BlogForm} />
            <Route exact path="/blog" component={Blogs} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
