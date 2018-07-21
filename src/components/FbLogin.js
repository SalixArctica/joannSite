import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { Button, MenuItem, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const buttonStyle = {
  color: 'white !important',
  marginBottom: "0px",
}

class FbLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      name: '',
      picture: '',
      id: '',
    }
  }

  getUser = (user) => {
    if(user.isLoggedIn) {
      this.setState({user});
    }
  }

  responseFacebook = (response) => {
    console.log(response);
    this.setState({
      name: response.name,
      picture: response.picture.data.url,
      id: response.id,
      isLoggedIn: true,
    });
    this.props.passUser(this.state);
  }

  logout = () => {
    this.setState({isLoggedIn: false});
    window.location.reload();
  }

  componentClicked = () => console.log('component clicked');

  render() {
    let fbContent;

    if(this.state.isLoggedIn) {
      fbContent = (
        <div>
          <NavDropdown
            title={'Welcome, ' +this.state.name.substr(0, this.state.name.indexOf(' '))}>
            <MenuItem onClick={this.logout}>logout</MenuItem>
          </NavDropdown>
        </div>)
    }
    else {
      fbContent = (
        <FacebookLogin
            appId="210427716469851"
            fields="name,picture"
            callback={this.responseFacebook}
            render={renderProps => (
            <p style={buttonStyle} onClick={renderProps.onClick}>
              <FontAwesomeIcon icon={faFacebook} /> login
            </p>
            )}
        />);
    }
    return <div>{fbContent}</div>;
  }
}

export default FbLogin;
