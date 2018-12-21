import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  Col,
  Row
} from 'reactstrap';
import './Carte.scss';
import Image from '../image.json';

const CardCategory = (props) => {
  return (
    <div className="CardCategory">
      <Row>
        {
          Image.map((oneimage) => (
            <Col md="4" xs="12" lg="3" >
              <Card className="card-size">
              <div className="image-size">
                <CardImg top width="100%" src={oneimage.image} alt="Image alimentation" />
              </div>
                <CardBody>
                  <CardTitle>{oneimage.title}</CardTitle>
                  <Button className="button-color">Explorer</Button>
                </CardBody>
              </Card>
            </Col>
          ))
        }
      </Row>
    </div>
  );
};

export default CardCategory;
