import React, {Component} from 'react';
import {Col, Row, Button} from 'react-bootstrap';

const textAreaStyle = {
  resize: 'none',
  height: '10rem',
  width: '100%',
  padding: '5px',
}

const ImageStyle = {
  display: 'block',
  margin: 'auto'
}

const nameStyle = {
  textAlign: 'center',
}

class CommentForm extends Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      user: null,
    };
  }

  render() {
    return(
      <div>
        <Row>
          <Col xs={3} lg={1}>
            <img style={ImageStyle} src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2241380282544816&height=50&width=50&ext=1531820086&hash=AeTTsz8keKMCXtkA"/>
            <p style={nameStyle}>{this.props.user}</p>
          </Col>
          <Col lg={6} xs={9}>
            <textarea style={textAreaStyle} placeholder="Your comment here!" />
            <Button style={{float: "right", width: "100%"}} bsStyle="info">Submit</Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default CommentForm;
