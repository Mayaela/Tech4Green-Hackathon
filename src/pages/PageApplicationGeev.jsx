import React from 'react';
import Applist from '../applist.json';
import './PageApplicationGeev.scss';
import {
  Col,
  Row
} from 'reactstrap';

import { Link } from 'react-router-dom';

const PageApplicationGeev = () => (
  <div className="PageApplicationGeev">
    <h1>{Applist[26].Company}</h1>
    <img src="/medias/images/geev2.png" alt="geev" />
    <p>{Applist[26].Category}</p>
    <p className="descrition">{Applist[26].Description}</p>
    <Row>
      <Col className="border-col">
        <h2 className="pour-contre">Avantages</h2>
        <p >
          Une super solution anti-gaspillage quand on a plus besoin de certains objets que l’on a pas envie de jeter à la poubelle. C’est une application solidaire et éco friendly.
        </p>
      </Col>
      <Col className="border-col">
        <h2 className="contre-contre">Inconvénients</h2>
        <p>Nombre limite d’objets à mettre dans ses favoris
Probléme de notifications: il arrive régulièrement que les notifications ne s’affichent pas</p>
      </Col>
    </Row>
    <Row className="commentaire">
      <Col>
        Christophe : “L’application est génial par compte ce qui serait bien que vous faites dans les prochaines mises à jour c’est que quand on est en conversation instantanée on puisse envoyer des photos de l’objet car parfois quand les personnes font des demandes de dons et qu’on voudrait discuter directement avec eux par message ça serait bien qu’on puisse le renvoyer la photo de l’objet qui recherche directement dans la discussion instantanée”
      </Col>
      <Col>
        Jennyfer : “Très bonne application lorsqu’on a des remords à jeter des objets qui peuvent encore servir mais qui sont invendables ! Cette application est dans l’air du temps de l’anti gâchis ! J’enlève néanmoins une étoile à cause du manque de notifications lors de la réception d’un message cela m’a déjà mis dans des situations inconfortables face à des geevers qui attendaient ma réponse.”
      </Col>
    </Row>
    <Link className="lien" to="/formulaire-avis">Ajouter un avis</Link>
  </div>
);

export default PageApplicationGeev;
