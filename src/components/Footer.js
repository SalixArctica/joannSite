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

class Footer extends React.Component {
  constructor(){
    super();
    this.state = {
      what: '',
      how: '',
      more: '',
      message: ''
    }
  }

  handleSubmit() {
    this.setState({message: 'sending...'});
    fetch('/api/bug', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
    .then(res => res.json)
    .then(res => this.setState({message: res.message}))
  }

  render() {
    return(
      <Grid>
        <Row>
          <div className="socialIcons">
            <Col xs={12} sm={4} id="footerItem" >
              <Popup trigger={<a href='#'><p>Report a bug</p></a>} modal>
                {close => (
                  <div>
                    <h2>Bug reporter</h2>
                    <p>What happened?</p>
                    <textarea
                      style={textareaStyle}
                      value={this.state.what}
                      onChange={(event) => this.setState({what: event.target.value})}
                    />
                    <p>How would I recreate the bug?</p>
                      <textarea
                        style={textareaStyle}
                        value={this.state.how}
                        onChange={(event) => this.setState({how: event.target.value})}
                      />
                    <p>Additional details</p>
                      <textarea
                        style={textareaStyle}
                        value={this.state.more}
                        onChange={(event) => this.setState({more: event.target.value})}
                      />
                    <Row>
                      <Button onClick={() => this.handleSubmit()} stlye={textareaStyle} bsStyle="primary">Submit</Button>
                    </Row>
                    <Row>
                      <p>{this.state.message}</p>
                    </Row>
                  </div>
                )}
              </Popup>
              <Link href='#' to='/disclaimer'><p>disclaimer</p></Link>
              <Link href='#' to='/privacy'><p>privacy policy</p></Link>
            </Col>
            <Col xs={3} sm={1}>
              <a href='#' onClick={() => window.location='https://twitter.com'}>
                <ReactSvg path={process.env.PUBLIC_URL + '/assets/logos/twitter.svg'} />
              </a>
            </Col>
            <Col xs={3} sm={1}>
              <ReactSvg path={process.env.PUBLIC_URL + '/assets/logos/facebook.svg'} />
            </Col>
            <Col xs={3} sm={1}>
              <ReactSvg path={process.env.PUBLIC_URL + '/assets/logos/linkedin.svg'} />
            </Col>
            <Col xs={3} sm={1}>
              <ReactSvg path={process.env.PUBLIC_URL + '/assets/logos/google.svg'} />
            </Col>
            <Col xs={12} sm={4} id="footerItem" >
              <p>Created by:</p>
              <a href='#' onClick={()=>window.location="https://tankcaster.github.io"}>tankcaster.github.io</a>
            </Col>
          </div>
        </Row>
      </Grid>
    )
  }
}

export default Footer;
