import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

class Home extends Component {
  render() {
    return(
      <Grid>
        <Row show-grid>
          <Col lg={8}>
            <h1>Title here</h1>
          </Col>
          <Col lg={4}>
            <p>posted on: 43/23/35</p>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <p>Nulla facilisi. Quisque turpis velit, blandit id quam in, molestie pretium orci. Fusce dictum non orci eget commodo. Nulla mattis lacinia dui et tempor. Duis cursus viverra finibus. Quisque suscipit lacinia libero id malesuada. Aliquam auctor nisi eros, nec vulputate felis elementum quis. Nam quam metus, sollicitudin nec condimentum sit amet, iaculis ut justo. Nullam nulla dui, commodo eu mauris vitae, euismod rutrum tellus. Duis vel rhoncus ex, sit amet commodo velit. Vivamus purus tellus, facilisis quis dignissim a, mollis id risus. Class aptent taciti sociosqu ad litora </p>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Home;
