import React from 'react';
import { Col, Row, Grid } from 'react-bootstrap';
import { withRouter } from 'react-router';
import Comment from './Comment';
import CommentForm from './CommentForm';

const  titleStyle = {
  borderBottom: '1px dotted #777',
  marginBottom: '15px',
}

const dateStyle = {
  verticalAlign: 'text-bottom',
  color: 'lightgrey',
}

class Blog extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch('/api' + this.props.location.pathname)
    .then(res => res.json())
    .then(blog => this.setState({blog}))
    .catch((err) => {
      console.log('err');
    })
  }

  renderComments = () => {
    if(this.state.blog.comments){
      return (
        this.state.blog.comments.map(comment =>
          <Comment comment={comment}/>
        )
      );
    } else {
      return null;
    }
  }

  renderAfterApiCall = () => {
    if(this.state.blog) {
      return (
        <Grid>
          <div>
            <Row style={titleStyle}>
              <div>
                <Col lg={8}>
                  <h1>{this.state.blog.title}</h1>
                </Col>
                <Col lg={4}>
                  <p style={dateStyle}>{'posted on: ' + this.state.blog.date}</p>
                </Col>
              </div>
            </Row>
            <Row>
              <Col lg={12}>
                <p>{this.state.blog.content}</p>
              </Col>
            </Row>
            <Row>
              <h2 style={titleStyle} >Comments</h2>
            </Row>
            <Row>
              {this.renderComments()}
            </Row>
            <Row>
              <CommentForm passUser={this.props.passUser} location={this.props.location.pathname} user={this.props.user}/>
            </Row>
          </div>
        </Grid>
      );
    }
    else {
      return null;
    }
  }

  render() {
    return (
      this.renderAfterApiCall()
    )
  }
}

const BlogWithRouter = withRouter(Blog);

export default BlogWithRouter;
