import React from 'react';
import {Image, Grid, Row, Button} from 'react-bootstrap';

const inputStyle = {
  width: '50%',
  height: '100px',
}

class RecipeForm extends React.Component {

  constructor(){
    super();
    this.state = {
      name: '',
      ingredients: [''],
      instructions: [''],
      selectedFile: null,
      message: '',
    }
  }

  addIngredient = (event) => {
    event.preventDefault();
    this.setState({ingredients: this.state.ingredients.concat([''])});
  }

  removeIngredient = (event) => {
    event.preventDefault();
    let newArr = this.state.ingredients;
    newArr.pop();
    this.setState({ingredients: newArr});
  }

  handleIngredientChange = (id) => (event) => {
    const newIngredients = this.state.ingredients.map((ingredient, sidx) => {
      if (id !== sidx) return ingredient;
      return event.target.value;
    });
    this.setState({ ingredients: newIngredients });
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  addInstruction = (event) => {
    event.preventDefault();
    this.setState({instructions: this.state.instructions.concat([''])});
  }

  removeInstruction = (event) => {
    event.preventDefault();
    let newArr = this.state.instructions;
    newArr.pop();
    this.setState({instructions: newArr});
  }

  handleinstructionChange = (id) => (event) => {
    const newInstructions = this.state.instructions.map((ingredient, sidx) => {
      if (id !== sidx) return ingredient;
      return event.target.value;
    });
    this.setState({ instructions: newInstructions });
  }

  handleFileAdd = (event) => {
    this.setState({selectedFile: event.target.files[0]}, () => {
      console.log(this.state.selectedFile.name);
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({message: 'waiting on response'});

    let fd = new FormData();
    fd.append('img', this.state.selectedFile, this.state.selectedFile.name)
    fd.append('name', this.state.name);
    fd.append('ingredients', JSON.stringify(this.state.ingredients));
    fd.append('instructions', JSON.stringify(this.state.instructions));

    fetch('/api/recipes', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: fd,
    })
    .then(res => res.json())
    .then(res => this.setState({message: res.message}))
  }

  render(){
    return(
      <div>
        <Grid>
        <Row>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <input type="text" id="name" value={this.state.value} onChange={this.handleNameChange} placeholder="name"/>
            {this.state.ingredients.map((ingredient, id) => (
              <div>
                <input type="text" id="ingredient" placeholder={'ingredient ' + (id + 1)} onChange={this.handleIngredientChange(id)}/>
              </div>
            ))}
            <Button bsStyle="success" onClick={this.addIngredient}>+ ingredient</Button>
            <Button bsStyle="danger" onClick={this.removeIngredient}>- ingredient</Button>
            {this.state.instructions.map((instruction, id) => (
              <div>
                <textArea style={inputStyle} type="text" id="instruction" placeholder={'instruction ' + (id + 1)} onChange={this.handleinstructionChange(id)}/>
              </div>
            ))}
            <Button bsStyle="success" onClick={this.addInstruction}>+ instruction</Button>
            <Button bsStyle="danger" onClick={this.removeInstruction}>- instruction</Button>
            <input type="file" onChange={this.handleFileAdd}/>
            <Button bsStyle="primary" type="submit" value="Submit">Submit</Button>
        </form>
        </Row>
        <p>{this.state.message}</p>
      </Grid>
      </div>
    );
  }

}



export default RecipeForm;
