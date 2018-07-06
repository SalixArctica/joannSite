import React from 'react';



class RecipePost extends React.Component {

  constructor(){
    super();
    this.state = {
      ingredientCnt: 0,
      instructionCnt: 0,
    }
    this.tempRecipe = {
      name: '',
      ingredients: [],
      instructions: [],
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
  }

  handleNameChange(event){
    this.tempRecipe.name = event.target.value;
  }

  handleSubmit(){

  }

  addIngredient(){
    this.setState({ingredientCnt: this.state.ingredientCnt+1});
  }



  render() {
    let output = [];

    for(let i = 0; i < this.state.ingredientCnt; i += 1){
      output.push(<input type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="Ingredient" i/>);
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="Name"/>
        <div>
        <button onClick={this.addIngredient}>Add ingredient</button>
        {output}
        </div>
      </form>
    );
  }
}

export default RecipePost;
