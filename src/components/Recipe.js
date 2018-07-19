import React, { Component } from 'react';
import { Image, Grid, Col, Row, Button } from 'react-bootstrap';
import { withRouter, Redirect } from 'react-router'
import PropTypes from 'prop-types'
import './css/Recipe.css';
import CommentForm from './CommentForm';
import Comment from './Comment';
import Popup from 'reactjs-popup';

const centeredStyle = {
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'block',
  width: '50%',
  marginBottom: '20px'
}

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

  handleDelete = () => {
    fetch('/api/recipes/' + this.state.recipe.id, {
      method: "DELETE",
    })
    .then(this.props.history.push('/recipes'))
  }

  renderAfterApiCall = () =>{
    if(this.state.recipe){
      return(
        <Grid>
          <Row>
            <Col lg={8} centered>
              <Image id="food" responsive rounded src={'https://joannstorage.s3.us-east-2.amazonaws.com/images/' + this.state.recipe.image}></Image>
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
            <Popup trigger={<Button bsStyle="danger">Delete</Button>} modal>
              {close => (
                <div>
                  <h2 style={{textAlign: 'center', marginBottom: '30px'}}>Are you sure you want to delete this recipe?</h2>
                  <Row>
                    <Col xs={6}>
                      <Button style={centeredStyle} onClick={() => this.handleDelete()}>Yes</Button>
                    </Col>
                    <Col xs={6}>
                      <Button style={centeredStyle} onClick={close}>No</Button>
                    </Col>
                  </Row>
                </div>
              )}
            </Popup>

            <Button bsStyle="warning">Edit</Button>
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
      return <h style={{margin: "40%"}}>loading...</h>;
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
