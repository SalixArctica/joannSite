import React, { Component } from 'react';
import { Grid, Row, Col, Button} from 'react-bootstrap';

const textStyle = {
  textAlign: 'center'
}

const imageStyle = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '50px',
  width: '20%',
}

const buttonStyle = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '50px',
}

class Home extends Component {
  constructor(){
    super();
    this.state = {
      isAdmin: false,
    }
  }

  adminChange = () => {
    this.setState({
      isAdmin: !this.state.isAdmin,
    }, () => this.props.passAdmin(this.state.isAdmin))
  }

  render() {
    return(
      <Grid>
        <Row show-grid>
            <h1 style={textStyle}>Welcome to Joann's website</h1>
            <p style={textStyle}>{"<development build v0.8 />"}</p>
            <img style={imageStyle} src={process.env.PUBLIC_URL + '/assets/smiley.jpg'}/>
            <Button type="checkbox" style={buttonStyle} id="adminChecker" onClick={this.adminChange}>Activate Admin Mode</Button>
        </Row>
      </Grid>
    )
  }
}

export default Home;
