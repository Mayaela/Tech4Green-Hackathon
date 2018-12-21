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
        <Container>
          <Row>
            <Col className="col-12 mt-5 mb-3">
              <Qui />
            </Col>
          </Row>
        </Container>


      </div>
    );
  }
}

export default HomePage;
