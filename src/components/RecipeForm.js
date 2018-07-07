import React from 'react';



class RecipeForm extends React.Component {

  constructor(){
    super();
    this.state = {
      selectedFile: null,
      recipe: {
        name: '',
      }
    }
  }

  handleNameChange = (event) => {
    this.setState({recipe:{name: event.target.value}});
  }

  handleFileAdd = (event) => {
    this.setState({selectedFile: event.target.files[0]})
  }

  handleSubmit = (event) => {
    fetch('http://localhost:5000/api/recipes', {
      method: 'POST',
      headers: {
        'Accept': 'multipart/form-data',
        'Content-Type': 'multipart/form-data',
      },
      body: JSON.stringify(this.state),
      files: this.state.selectedFile
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleNameChange} placeholder="name"/>
          <input type="file" onChange={this.handleFileAdd}></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }

}

export default RecipeForm;
