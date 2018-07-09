import React from 'react';

class RecipeForm extends React.Component {

  constructor(){
    super();
    this.state = {
      name: '',
      ingredients: [''],
      instructions: [''],
      selectedFile: null,
    }
  }

  addIngredient = (event) => {
    event.preventDefault();
    this.setState({ingredients: this.state.ingredients.concat([''])});
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

    let fd = new FormData();
    fd.append('img', this.state.selectedFile, this.state.selectedFile.name)
    fd.append('name', this.state.name);
    fd.append('ingredients', JSON.stringify(this.state.ingredients));
    fd.append('instructions', JSON.stringify(this.state.instructions));

    fetch('http://localhost:5000/api/recipes', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: fd,
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="name" value={this.state.value} onChange={this.handleNameChange} placeholder="name"/>
          <span/>
          {this.state.ingredients.map((ingredient, id) => (
            <div>
              <input type="text" id="ingredient" placeholder={'ingredient ' + (id + 1)} onChange={this.handleIngredientChange(id)}/>
            </div>
          ))}
          <button onClick={this.addIngredient}>add ingredient</button>
          <span/>
          {this.state.instructions.map((instruction, id) => (
            <div>
              <input type="text" id="instruction" placeholder={'instruction ' + (id + 1)} onChange={this.handleinstructionChange(id)}/>
            </div>
          ))}
          <button onClick={this.addInstruction}>add instruction</button>
          <span/>
          <input type="file" onChange={this.handleFileAdd}/>
          <span/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }

}



export default RecipeForm;
