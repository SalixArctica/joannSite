import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Grid } from 'react-bootstrap';
import './css/Footer.css'

function Footer(props) {
  return(
    <Grid>
      <Row id="footer">
        <Col lg={4} sm={12}>
          <a id="footerItem">Report a bug</a>
        </Col>
        <Col lg={4} sm={12}>
          <p id="footerItem">{'<Created by Hank Lancaster/>'}</p>
        </Col>
        <Col lg={4} sm={12}>
          <a id="footerItem" onClick={()=>window.location="https://tankcaster.github.io"}>tankcaster.github.io</a>
        </Col>
      </Row>
    </Grid>
  )
}

export default Footer;
