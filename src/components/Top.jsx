import React, { Component } from 'react';
import './Top.scss';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Row,
  Col,
} from 'reactstrap';

import { Link } from 'react-router-dom';

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div className="Top">
        <h2 className="title">Les applications les plus populaires de 2018</h2>
        <Row className="ligne">
          <Col sm={4}>
            <Card>
              <CardImg top className="card-image" src="/medias/geev.png" alt="Geev" />
              <CardBody>
                <CardTitle>GEEV</CardTitle>
                <Link to="/application/geev">Plus de détails</Link>
              </CardBody>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <CardImg top className="card-image" src="/medias/wag.jpg" alt="Wag" />
              <CardBody>
                <CardTitle>WAG</CardTitle>
                <Link to="/">Plus de détails</Link>
              </CardBody>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <CardImg top className="card-image" src="/medias/backmarket.png" alt="Backmarket" />
              <CardBody>
                <CardTitle>BACK MARKET</CardTitle>
                <Link to="/">Plus de détails</Link>
              </CardBody>
            </Card>
          </Col>

        </Row>

      </div>
    );
  }
}

export default Top;