import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Grid } from 'react-bootstrap';
import CustomNav from './components/CustomNav';
import Recipe from './components/Recipe';
import Home from './components/Home';
import Blogs from './components/Blogs'
import RecipeForm from './components/RecipeForm';
import BlogForm from './components/BlogForm';
import Recipes from './components/Recipes';
import Footer from './components/Footer';
import './components/css/App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {};
  }

  getUser = (user) => {
    this.setState({user});
  }

  getAdmin = (isAdmin) => {
    this.setState({isAdmin}, () => console.log(this.state.isAdmin));
  }
  render() {
    return (
      <div id="body">
        <Router>
          <div>
            <CustomNav passUser={this.getUser}/>
            <Route exact path="/recipes" component={()=> <Recipes isAdmin={this.state.isAdmin} />} />
            <Route exact path="/recipes/:id" component={()=><Recipe user={this.state.user} isAdmin={this.state.isAdmin} />} />
            <Route exact path="/recipes/post" component={RecipeForm} />
            <Route exact path="/" component={()=><Home passAdmin={this.getAdmin} />} />
            <Route path="/blog/post" component={BlogForm} />
            <Route exact path="/blog" component={()=> <Blogs isAdmin={this.state.isAdmin} />} />
          </div>
        </Router>
        <div id="footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
