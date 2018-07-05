import React, { Component } from 'react';
import { Image, Grid, Col, Row } from 'react-bootstrap';

class Recipe extends React.Component {
  render() {
    return(
      <Grid>
        <Row>
          <Col lg={8}>
            <Image responsive src="http://ichef.bbci.co.uk/wwfeatures/wm/live/1600_640/images/live/p0/63/cq/p063cq8z.jpg"></Image>
          </Col>
          <Col  lg={4}>
            <h1>Cured Meat</h1>
            <ul>
              <li>meat</li>
              <li>salt</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col lg = {12}>
              <h2>Prep</h2>
              <ol>
                <li>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam justo est, tempor fermentum ex ut, dignissim vehicula risus. Pellentesque maximus a turpis ut rhoncus. Sed velit augue, convallis in euismod id, rutrum eu tellus. Quisque arcu augue, accumsan ut vestibulum sit amet, maximus nec quam. Cras blandit elit in augue tincidunt pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam pu
                </li>
                <li>
                  Nulla facilisi. Quisque turpis velit, blandit id quam in, molestie pretium orci. Fusce dictum non orci eget commodo. Nulla mattis lacinia dui et tempor. Duis cursus viverra finibus. Quisque suscipit lacinia libero id malesuada. Aliquam auctor nisi eros, nec vulputate felis elementum quis. Nam quam metus, sollicitudin nec condimentum sit amet, iaculis ut justo. Nullam nulla dui, commodo eu mauris vitae, euismod rutrum tellus. Duis vel rhoncus ex, sit amet commodo velit. Vivamus purus tellus, facilisis quis dignissim a, mollis id risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam accumsan hendrerit bibendum.
                </li>

              </ol>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Recipe;
