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

  componentDidMount = () => {
    this.setState({user: this.props.user})
  }

  handleChange = (event) => {
    this.setState({comment: event.target.value})
  }

  handleSubmit = (event) => {
    fetch('http://localhost:5000/api' + this.props.location, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
    .then(window.location.reload());
  }

  render() {
    let output;

    //check is user is logged in
    if(this.props.user){
      output = (
         <Row>
          <Col xs={3} lg={1}>
            <img style={ImageStyle} src={this.props.user.picture} alt={this.props.user.name}/>
            <p style={nameStyle}>{this.props.user.name}</p>
          </Col>
          <Col lg={6} xs={9}>
            <textarea style={textAreaStyle} onChange={this.handleChange} placeholder="Your comment here!" />
            <Button style={{float: "right", width: "100%"}} onClick={this.handleSubmit} bsStyle="info">Submit</Button>
          </Col>
        </Row>
      );
    } else{
      output = <h3>Login to comment</h3>;
    }

    return(
      <div>
        {output}
      </div>
    )
  }
}

export default CommentForm;
