import React from 'react';
import {Image, Grid, Row, Button} from 'react-bootstrap';

const inputStyle = {
  width: '50%',
  height: '100px',
}

class ProductForm extends React.Component {

  constructor(){
    super();
    this.state = {
      name: '',
      description: '',
      selectedFile: '',
      message: '',
    }
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  handleDesciptionChange = (event) => {
    this.setState({description: event.target.value});
  }

  handleFileAdd = (event) => {
    this.setState({selectedFile: event.target.files[0]});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({message: 'waiting on response'});

    let fd = new FormData();
    if(this.state.selectedFile){
      fd.append('img', this.state.selectedFile, this.state.selectedFile.name)
    }
    fd.append('name', JSON.stringify(this.state.name));
    fd.append('description', JSON.stringify(this.state.description));


    fetch('/api/featured/product', {
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
            <input type="text" id="name" value={this.state.name} onChange={this.handleNameChange} placeholder="name"/>
            <textarea id="description" value={this.state.description} onChange={this.handleDesciptionChange} placeholder="description"/>
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



export default ProductForm;
