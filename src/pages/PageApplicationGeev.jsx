import React from 'react';
import Applist from '../applist.json';
import './PageApplicationGeev.scss';
import {
  Container,
  Col,
  Row,
  Button
} from 'reactstrap';

import { Link } from 'react-router-dom';

const PageApplicationGeev = () => (
  <div className="PageApplicationGeev">
    <Container fluid>
      <Row>
        <Col className="col-8 offset-2">
          <h1>{Applist[26].Company}</h1>
          <img className="mt-3 mb-5" src="/medias/images/geev2.png" alt="geev" />
          <h3>{Applist[26].Category}</h3>
          <p className="descrition">{Applist[26].Description}</p>
        </Col>
      </Row>
      <Row>
        <Col className="border-col pt-4 pb-4 pl-5 pr-5">
          <h2 className="pour-contre">Avantages</h2>
          <p >
            Une super solution anti-gaspillage quand on a plus besoin de certains objets que l’on a pas envie de jeter à la poubelle. C’est une application solidaire et éco friendly.
        </p>
        </Col>
        <Col className="border-col pt-4 pb-4 pl-5 pr-5">
          <h2 className="contre-contre">Inconvénients</h2>
          <p>Nombre limite d’objets à mettre dans ses favoris
Probléme de notifications: il arrive régulièrement que les notifications ne s’affichent pas</p>
        </Col>
      </Row>
      <Row className="commentaire pt-4 pb-4">
        <Col className="pl-4 pr-4">
          Christophe : “L’application est géniale, mais dans les prochaines mises à jour, il serait bien de créer un système de conversation instantanée pour qu'on puisse envoyer des photos de l’objet. En effet, parfois des personnes font des demandes de dons et demandent plus de photos. Si on pouvait discuter directement avec eux par message, on pourrait envoyer la photo de l’objet directement dans la discussion instantanée.”
      </Col>
      <Col className="pl-4 pr-4">
          Jennyfer : “Très bonne application lorsqu’on a des remords à jeter des objets qui peuvent encore servir mais qui sont invendables ! Cette application est dans l’air du temps de l’anti gâchis ! J’enlève néanmoins une étoile à cause du manque de notifications lors de la réception d’un message. Cela m’a déjà mis dans des situations incomfortables face à des Geevers qui attendaient ma réponse.”
      </Col>
      </Row>
      <Link className="lien" to="/formulaire-avis"><Button className="button-color">Ajouter un avis</Button></Link>
    </Container>
  </div>
);

export default PageApplicationGeev;
