import React, { Component } from 'react';
import './Formu.scss';
import {
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

class Formu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div className="Formu">
        <h2>Votre avis</h2>
        <p className="para">Les champs obligatoires sont indiqués par <span className="red">*</span></p>
        <hr />
        <Form>
            <FormGroup row>
                <Label for="eval" sm={3}>Evaluez ce site/cette application <span className="red">*</span></Label>
                <Col sm={9} className="rating">
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
                    <Input required type="text" name="title" id="title" />
                </Col>
            </FormGroup>
            <FormGroup row>
            <Label for="view" sm={3}>Votre avis <span className="red">*</span></Label>
            <Col sm={9}>
                <Input required type="textarea" name="view" id="view" />
            </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="pseudo" sm={3}>Votre pseudo <span className="red">*</span></Label>
                <Col sm={9}>
                    <Input type="text" name="pseudo" id="pseudo" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="recommand" sm={3}>Recommanderiez-vous ce site/cette application ?</Label>
                <Col sm={9}>
                    <FormGroup check>
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
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col sm={{ size: 10 }}>
                    <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="checkbox2" />{' '}
                        En soumettant votre avis, vous acceptez l'intégralité de nos <span className="conditions">conditions générales d'utilisation.</span>
                    </Label>
                    </FormGroup>
                </Col>
            </FormGroup>
            <FormGroup check row>
                <Col sm={{ size: 6, offset: 6 }}>
                    <Button className="button-submit" type="button">Publier mon avis</Button>
                </Col>
            </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Formu;