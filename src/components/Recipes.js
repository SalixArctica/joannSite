import React from 'react';
import { Button, Grid, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css/Recipes.css';

const titleStyle = {
  borderBottom: '1px dotted #777',
  marginBottom: '20px',
}

const imageStyle = {
  height: '250px',
  width: '250px',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'block',
}

const labelStyle = {
  textAlign: 'center',
}

const buttonStyle = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '100px'
}

class Recipes extends React.Component {
  constructor() {
    super();
    this.state = { recipes: null }
  }

  componentDidMount() {
    fetch('/api/recipes')
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
          <h1 style = {titleStyle}>Recipes</h1>
          {this.state.recipes.recipes.map(recipe =>
            <div>
                <Col md={3} sm={4} xs={12}>
                  <Link to={"/recipes/" + recipe.id}>
                    <Image style={imageStyle} centered circle thumbnail src={process.env.PUBLIC_URL + '/assets/' + recipe.image}/>
                    <h2 style={labelStyle}>{recipe.name}</h2>
                  </Link>
                </Col>
            </div>
          )}
          <Row>
            <span/>
          </Row>
          <Link to='/recipes/post'><Button style={buttonStyle} bsStyle="info">Post New Recipe</Button></Link>
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
