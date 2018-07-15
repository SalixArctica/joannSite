  import React from 'react';
  import { Col, Row } from 'react-bootstrap';

  const titleStyle = {
    marginTop: '50px',
    borderBottom: '1px dotted #777',
    marginBottom: '25px'
  }

  const textAreaStyle = {
    border: '1px solid #777',
    padding: '5px',
    height: 'auto',
    width: '100%',
    marginBottom: '15px',
  }

  const ImageStyle = {
    display: 'block',
    margin: 'auto'
  }

  const nameStyle = {
    textAlign: 'center',
  }


  function Comment(props) {
    return(
      <div>
        <Row>
          <Col xs={3} lg={1}>
            <img style={ImageStyle} src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2241380282544816&height=50&width=50&ext=1531820086&hash=AeTTsz8keKMCXtkA" alt={props.comment.user}/>
            <p style={nameStyle}>{props.comment.user}</p>
          </Col>
          <Col lg={6} xs={9}>
            <p style={textAreaStyle}>{props.comment.content}</p>
          </Col>
        </Row>
      </div>
    );
  }

  export default Comment;
