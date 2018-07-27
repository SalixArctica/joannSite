import React from 'react';
import { Row, Col, Grid } from 'react-bootstrap';

const contentStyle = {
  width: '100%',
  height: '150px',
}

class BlogForm extends React.Component {
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

  componentDidMount = () => {
    let current = new Date;
    this.setState({date: current.toDateString()});
    if(this.props.blog){
      this.setState({
        title: this.props.blog.title,
        content: this.props.blog.content,
        date: this.props.blog.date
      });
    }
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
    //check if the form is being used to edit or post
    if(this.props.editMode){
      fetch('/api/blog/' + this.props.blog.id, { //then make the relevant request
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state)
      })
    } else {
      fetch('/api/blog/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state)
      })
    }
  }


  render() {
    return (
      <Grid>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col lg={4}>
                <input type="text" value={this.state.title} onChange={this.handleTitleChange} placeholder="title" />
            </Col>
            <Col lg={4}/>
            <Col lg={4}>
              <input type="text" value={this.state.date} onChange={this.handleDateChange} placeholder="date" />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
                <textarea style={contentStyle} type="text" value={this.state.content} onChange={this.handleContentChange} placeholder="content" />
            </Col>
          </Row>
          <Row>
            <input type="submit" value="Submit"/>
          </Row>
        </form>
      </Grid>
    );
  }
}

export default BlogForm;
