import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css/Recipes.css'

class Recipes extends React.Component {
  constructor() {
    super();
    this.state = { recipes: null }
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/recipes')
    .then(res => res.json())
    .then(recipes => this.setState({recipes}))
    .catch(err => {
      console.log(err);
    })
  }

  renderAfterApiCall = () => {
    if(this.state.recipes){
      return(
        <Grid>
          <h1>Recipes</h1>
          {this.state.recipes.recipes.map(recipe =>
            <div>
                <Col lg={4}>
                  <Image circle thumbnail src={process.env.PUBLIC_URL + '/assets/' + recipe.image}/>
                  <Link to={"/recipes/" + recipe.id}><h2>{recipe.name}</h2></Link>
                </Col>
            </div>
          )}
          <Row>
            <span/>
          </Row>
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
