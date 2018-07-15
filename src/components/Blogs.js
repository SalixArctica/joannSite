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
            </div>
          )}
          <Link to='/blog/post'><Button style={{marginTop: '50px'}} bsStyle="info">Post New Blog</Button></Link>
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
