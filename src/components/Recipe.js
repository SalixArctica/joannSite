import React, { Component } from 'react';
import { Image, Grid, Col, Row } from 'react-bootstrap';
import './Recipe.css';

class Recipe extends Component {
  constructor(){
    super();
    this.state = {}
  }

  componentDidMount(){
    fetch('http://localhost:5000/api' + this.props.location.pathname)
      .then(res => res.json())
      .then(recipe => this.setState({recipe}))
      .catch(() => {
        console.log('err');
      })
  }

  renderAfterApiCall = () =>{
    if(this.state.recipe){
      return(
        <Grid>
          <Row>
            <Col lg={8}>
              <Image id="food" rounded responsive src={process.env.PUBLIC_URL + '/assets/' + this.state.recipe.image}></Image>
            </Col>
            <Col  lg={4}>
              <h1>{this.state.recipe.name}</h1>
              <h4>Ingredients</h4>
              <ul>
                {this.state.recipe.ingredients.map(ingredient =>
                    <li key={ingredient}>{ingredient}</li>
                )}
              </ul>
            </Col>
          </Row>
          <Row>
            <Col lg = {12}>
                <h2>Prep</h2>
                <ol>
                  {this.state.recipe.instructions.map(instruction =>
                    <li>{instruction}</li>
                  )}
                </ol>
            </Col>
          </Row>
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

export default Recipe;
