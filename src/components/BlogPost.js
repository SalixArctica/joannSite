import React from 'react';

class BlogPost extends React.Component {
  constructor(){
    super();
    this.state = {
      title: '',
      date: '',
      content: '',
    }

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleDateChange(event) {
    this.setState({date: event.target.value});
  }

  handleContentChange(event) {
    this.setState({content: event.target.value});
  }

  handleSubmit(event) {
    fetch('http://localhost:5000/api/blog/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    })
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleTitleChange} placeholder="title" />
        <input type="text" value={this.state.value} onChange={this.handleDateChange} placeholder="date" />
        <input type="text" value={this.state.value} onChange={this.handleContentChange} placeholder="content" />
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default BlogPost;
