import React, { Component } from 'react';
import { Image, Grid, Col, Row } from 'react-bootstrap';
import './Recipe.css';

class Recipe extends Component {
  constructor(){
    super();
    this.state = {thing: []}
  }

  componentDidMount(){
    fetch('http://localhost:5000/api/recipes/0')
      .then(res => res.json())
      .then(recipe => this.setState({thing: recipe}))
  }

  renderAfterApiCall = () =>{
    if(this.state.thing.recipe){
      return(
        <Grid>
          <Row>
            <Col lg={8}>
              <Image id="food" rounded responsive src={process.env.PUBLIC_URL + '/assets/' + this.state.thing.recipe.image}></Image>
            </Col>
            <Col  lg={4}>
              <h1>{this.state.thing.recipe.name}</h1>
              <h4>Ingredients</h4>
              <ul>
                {this.state.thing.recipe.ingredients.map(ingredient =>
                    <li key={ingredient}>{ingredient}</li>
                )}
              </ul>
            </Col>
          </Row>
          <Row>
            <Col lg = {12}>
                <h2>Prep</h2>
                <ol>
                  {this.state.thing.recipe.instrcutions.map(instruction =>
                    <li>{instruction}</li>
                  )}
                </ol>
            </Col>
          </Row>
        </Grid>
      );
    }
    else{
      return null;
    }
  };

  render() {
    return(
      this.renderAfterApiCall()
    );
  }
}

export default Recipe;
