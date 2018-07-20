import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Grid, Button } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import './css/Footer.css'

const textareaStyle = {
  width: '50%',
  height: '100px',
  resize: 'none'
}

function Footer(props) {
  return(
    <Grid>
      <Row id="footer">
        <Col lg={4} sm={12}>
          <Popup trigger={<a>Report a bug</a>} modal>
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
