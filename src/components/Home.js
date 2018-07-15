import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

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

class Home extends Component {
  render() {
    return(
      <Grid>
        <Row show-grid>
            <h1 style={textStyle}>Welcome to Joann's website</h1>
            <p style={textStyle}>{"<development build v0.8 />"}</p>
            <img style={imageStyle} src={process.env.PUBLIC_URL + '/assets/smiley.jpg'}/>
        </Row>
      </Grid>
    )
  }
}

export default Home;
