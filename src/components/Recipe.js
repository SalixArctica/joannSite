import React, { Component } from 'react';
import { Image, Grid, Col, Row } from 'react-bootstrap';
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import './css/Recipe.css';
import CommentForm from './CommentForm';
import Comment from './Comment'

class Recipe extends Component {
  constructor(){
    super();
    this.state = {}
  }

  static propTypes = {
    location: PropTypes.object.isRequired,
  }

//make api call
  componentDidMount(){
    fetch('/api' + this.props.location.pathname)
      .then(res => res.json())
      .then(recipe => this.setState({recipe}))
      .catch(() => {
        console.log('err');
      })
  }

  renderComments = () => {
    if(this.state.recipe.comments){
      return (
        this.state.recipe.comments.map(comment =>
          <Comment comment={comment}/>
        )
      );
    } else {
      return null;
    }
  }

  renderAfterApiCall = () =>{
    if(this.state.recipe){
      return(
        <Grid>
          <Row>
            <Col lg={8} centered>
              <Image id="food" responsive rounded src={process.env.PUBLIC_URL + '/assets/' + this.state.recipe.image}></Image>
            </Col>
            <Col  lg={4}>
              <h1 id="title">{this.state.recipe.name}</h1>
              <h4>Ingredients</h4>
              <ul>
                {this.state.recipe.ingredients.map(ingredient =>
                    <li id="recipeLi" key={ingredient}>{ingredient}</li>
                )}
              </ul>
            </Col>
          </Row>
          <Row>
            <Col lg = {12}>
                <h2>Prep</h2>
                <ol>
                  {this.state.recipe.instructions.map(instruction =>
                    <div>
                      <li id="recipeLi">{instruction}</li>
                    </div>
                  )}
                </ol>
            </Col>
          </Row>
          <Row>
            <h3 id="title">Comments</h3>
          </Row>
          {this.renderComments()}
          <CommentForm location={this.props.location.pathname} user={this.props.user}/>
        </Grid>
      );
    }
    else{
      return <h>loading...</h>;
    }
  };


  render() {
    return(
      this.renderAfterApiCall()
    );
  }
}

const RecipeWithRouter = withRouter(Recipe);

export default RecipeWithRouter;
