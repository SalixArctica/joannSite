import React from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const  titleStyle = {
  borderBottom: '1px dotted #777',
  marginBottom: '15px',
}

const dateStyle = {
  verticalAlign: 'text-bottom',
  color: 'lightgrey',
}

class Blogs extends React.Component {
  constructor(){
    super();
    this.state = {blogs: null}
  }

  componentDidMount() {
    fetch('/api/blog')
    .then(res => res.json())
    .then(blogs => this.setState({blogs}))
    .catch(err => {
      console.log(err);
    })
  }

  handleDelete = (id) => {
    fetch('/api/blog/' + id, {
      method: 'DELETE',
    })
    .then(window.location.reload());
  }

  renderBlog = (blog) => {
    if(blog) {
      return (
        <div>
          <Row style={titleStyle}>
            <div>
              <Col lg={8}>
                <h1>{blog.title}</h1>
              </Col>
              <Col lg={4}>
                <p style={dateStyle}>{'posted on: ' + blog.date}</p>
              </Col>
            </div>
          </Row>
          <Row>
            <Col lg={12}>
              <p>{blog.content}</p>
            </Col>
          </Row>
          <Button bsStyle="danger" onClick={() => this.handleDelete(blog.id)}>Delete</Button>
        </div>
      );
    } else {
      return null;
    }
  }

  renderAfterApiCall = () => {
    if(this.state.blogs){
      return (
        <Grid>
          {this.state.blogs.map(blog =>
            this.renderBlog(blog)
          )}
          <Link to='/blog/post'><Button style={{marginTop: '50px'}} bsStyle="info">Post New Blog</Button></Link>
        </Grid>
      );
    } else {
      return (
        <h1>Loading...</h1>
      );
    }
  }

  render() {
    return this.renderAfterApiCall();
  }
}

export default Blogs;
