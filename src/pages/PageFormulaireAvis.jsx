import React, { Component } from 'react';
import './PageFormulaireAvis.scss';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

import { Link } from 'react-router-dom';


class Formu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.toggle();
  }

  render() {
    return (
      <Container className="Formu">
        <h2>Votre avis</h2>
        <p className="para">Les champs obligatoires sont indiqués par
          <span className="red">*</span>
        </p>
        <hr />
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="eval" sm={3}>Evaluez ce site/cette application <span className="red">*</span></Label>
            <Col sm={9} className="rating d-flex">
              <a href="#5" title="Donner 5 étoiles">★</a>
              <a href="#4" title="Donner 4 étoiles">★</a>
              <a href="#3" title="Donner 3 étoiles">★</a>
              <a href="#2" title="Donner 2 étoiles">★</a>
              <a href="#1" title="Donner 1 étoile">★</a>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="title" sm={3}>Titre de votre avis <span className="red">*</span></Label>
            <Col sm={9}>
              <Input type="text" name="title" id="title" required />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="view" sm={3}>Votre avis <span className="red">*</span></Label>
            <Col sm={9}>
              <Input required type="textarea" name="view" id="view" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="pour" sm={3}>Avantages <span className="red">*</span></Label>
            <Col sm={9}>
              <Input required type="textarea" name="pour" id="pour" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="cons" sm={3}>Inconvénients <span className="red">*</span></Label>
            <Col sm={9}>
              <Input required type="textarea" name="cons" id="cons" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="recommand" sm={3}>Recommanderiez-vous ce site/cette application ?</Label>
            <Col sm={9}>
              <Row>
                <FormGroup className="oui" check>
                  <Label check>
                    <Input type="radio" name="radio2" />{' '}
                    Oui
                    </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio2" />{' '}
                    Non
                    </Label>
                </FormGroup>
              </Row>

            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={{ size: 10 }}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox2" />{' '}
                  En soumettant votre avis, vous acceptez l'intégralité de nos <span className="conditions"><a href="/mentions_legales">conditions générales d'utilisation</a>.</span>
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 6, offset: 3 }}>
              <Button className="button-sub" type="submit">Publier mon avis</Button>
              <Link to="/application/geev"><Button className="button-sub" type="button">Annuler</Button></Link>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Enregistrement</ModalHeader>
                <ModalBody>
                  Votre avis a bien été pris en compte, merci.
                  </ModalBody>
                <ModalFooter>
                  <Button type="button" className="button-sub" onClick={this.toggle}>OK</Button>{' '}
                </ModalFooter>
              </Modal>
            </Col>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}

export default Formu;