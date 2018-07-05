import React, { Component } from 'react';
import CustomNav from './CustomNav';
import Recipe from './Recipe'


class App extends Component {
  render() {
    return (
      <div>
        <CustomNav/>
        <Recipe/>
      </div>
    );
  }
}

export default App;
