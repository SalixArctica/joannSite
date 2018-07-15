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
            <img style={ImageStyle} src={props.comment.user.picture} alt={props.comment.user.name}/>
            <p style={nameStyle}>{props.comment.user.name}</p>
          </Col>
          <Col lg={6} xs={9}>
            <p style={textAreaStyle}>{props.comment.comment}</p>
          </Col>
        </Row>
      </div>
    );
  }

  export default Comment;
