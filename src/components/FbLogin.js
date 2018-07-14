import React from 'react';
import FacebookLogin from 'react-facebook-login';

class FbLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    }
  }

  responseFacebook = (response) => {
    console.log(response);
  }

  componentClicked = () => console.log('component clicked');

  render() {
    let fbContent;

    if(this.state.isLoggedIn) {
      fbContent = null;
    }
    else {
      fbContent = (
        <FacebookLogin
        appId="210427716469851"
        autoLoad={true}
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook} />);
    }
    return <div>{fbContent}</div>;
  }
}

export default FbLogin;
