import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';

const titleStyle = {
  marginTop: '50px',
  borderBottom: '1px dotted #777',
  marginBottom: '25px'
}

const textAreaStyle = {
  resize: 'none',
  height: '10rem',
  width: '100%',
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
          <h1 style={titleStyle}>Comments</h1>
        </Row>
        <Row>
          <Col xs={1}>
            <img style={ImageStyle} src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2241380282544816&height=50&width=50&ext=1531820086&hash=AeTTsz8keKMCXtkA"/>
            <p style={nameStyle}>{this.props.user}</p>
          </Col>
          <Col lg={6} xs={11}>
            <textarea style={textAreaStyle} placeholder="Your comment here!" />
          </Col>
        </Row>
      </div>
    )
  }
}

export default CommentForm;
