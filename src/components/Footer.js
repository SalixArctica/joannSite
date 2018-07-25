import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Grid, Button } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import './css/Footer.css'
import ReactSvg from 'react-svg';


const textareaStyle = {
  width: '90%',
  height: '100px',
  resize: 'none'
}

function Footer(props) {
  return(
    <Grid>
      <Row>
        <div className="socialIcons">
          <Col lg={4} sm={12} id="footerItem" >
            <Popup trigger={<a href='#'>Report a bug</a>} modal>
              {close => (
                <div>
                  <h2>Bug reporter</h2>
                  <p>What happened?</p>
                  <textarea style={textareaStyle} />
                  <p>How would I recreate the bug?</p>
                  <textarea style={textareaStyle} />
                  <p>Additional details</p>
                  <textarea style={textareaStyle} />
                  <Row>
                    <Button stlye={textareaStyle} bsStyle="primary">Submit</Button>
                  </Row>
                </div>
              )}
            </Popup>
            <a href='#'><p>disclaimer</p></a>
          </Col>
          <Col xs={3} lg={1}>
            <a href='#' onClick={() => window.location='https://twitter.com'}>
              <ReactSvg path={process.env.PUBLIC_URL + '/assets/logos/twitter.svg'} />
            </a>
          </Col>
          <Col xs={3} lg={1}>
            <ReactSvg path={process.env.PUBLIC_URL + '/assets/logos/facebook.svg'} />
          </Col>
          <Col xs={3} lg={1}>
            <ReactSvg path={process.env.PUBLIC_URL + '/assets/logos/linkedin.svg'} />
          </Col>
          <Col xs={3} lg={1}>
            <ReactSvg path={process.env.PUBLIC_URL + '/assets/logos/google.svg'} />
          </Col>
          <Col lg={4} sm={12} id="footerItem" >
            <p>Created by:</p>
            <a href='#' onClick={()=>window.location="https://tankcaster.github.io"}>tankcaster.github.io</a>
          </Col>
        </div>
      </Row>
    </Grid>
  )
}

export default Footer;
