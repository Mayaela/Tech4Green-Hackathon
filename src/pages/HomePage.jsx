import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import { Container, Row, Col } from 'reactstrap';
import './HomePage.scss';
import Top from '../components/Top';
import Qui from '../components/Qui';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="HomePage">

        <Top />
        <Qui />

      </div>
    );
  }
}

export default HomePage;
