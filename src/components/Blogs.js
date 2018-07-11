import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Blogs extends React.Component {
  constructor(){
    super();
    this.state = {blogs: null}
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/blog')
    .then(res => res.json())
    .then(blogs => this.setState({blogs}))
    .catch(err => {
      console.log(err);
    })
  }

  renderAfterApiCall = () => {
    if(this.state.blogs){
      console.log(this.state.blogs);
      return (
        <Grid>
          {this.state.blogs.map(blog =>
            <div>
              <Row>
                <Col lg={8}>
                  <h1>{blog.title}</h1>
                </Col>
                <Col lg={4}>
                  <p>{blog.date}</p>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <p>{blog.content}</p>
                </Col>
              </Row>
            </div>
          )}
        </Grid>
      );
    }
    else{
      return null;
    }
  }

  render() {
    return this.renderAfterApiCall();
  }
}

export default Blogs;
