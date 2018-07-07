import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Recipes extends React.Component {
  constructor() {
    super();
    this.state = { recipes: null }
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/recipes')
    .then(res => res.json())
    .then(recipes => this.setState({recipes}));
  }

  renderAfterApiCall = () => {
    if(this.state.recipes){
      return(
        <Grid>
          {this.state.recipes.recipes.map(recipe =>
            <div>
              <Row>
                <Col lg={4}>
                  <Link to={"/recipes/" + recipe.id}><h2>{recipe.name}</h2></Link>
                </Col>
              </Row>
            </div>
          )}
        </Grid>
      );
    }
    else{
      return <h3>loading...</h3>;
    }
  }

  render(){
    return this.renderAfterApiCall();
  }
}

export default Recipes;
