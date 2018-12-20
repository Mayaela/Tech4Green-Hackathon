import React, { Component } from 'react';
import Formu from '../components-pages/Formu';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className="HomePage">
        Page Accueil
        <Formu />
      </div>
    );
  }
}

export default HomePage;
