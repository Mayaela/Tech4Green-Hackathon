import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PageApplication from './pages/PageApplication';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import PageAlimentation from './pages/PageAlimentation';
import PageMode from './pages/PageMode';
import PageSanteBeaute from './pages/PageSanteBeaute';
import PageMaisonEcolo from './pages/PageMaisonEcolo';
import PageTransports from './pages/PageTransports';
import PageTechnologie from './pages/PageTechnologie';
import PageDonTroc from './pages/PageDonTroc';
import PageOccasions from './pages/PageOccasions';
import PageReparation from './pages/PageReparation';
import PageSengager from './pages/PageSengager';
import PageCatégories from './pages/PageCatégories';
import SearchBar from './components/SearchBar';
import {Container} from 'reactstrap';


import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <SearchBar />
        <section className="section-app">
          <Switch>
            <Route onUpdate={window.scrollTo(0, 0)} exact path="/" component={HomePage} />
            <Route onUpdate={window.scrollTo(0, 0)} path="/application" component={PageApplication} />
            <Route onUpdate={window.scrollTo(0, 0)} path="/alimentation" component={PageAlimentation} />
            <Route onUpdate={window.scrollTo(0, 0)} path="/mode" component={PageMode} />
            <Route onUpdate={window.scrollTo(0, 0)} path="/sante_beaute" component={PageSanteBeaute} />
            <Route onUpdate={window.scrollTo(0, 0)} path="/maison_ecolo" component={PageMaisonEcolo} />
            <Route onUpdate={window.scrollTo(0, 0)} path="/transports" component={PageTransports} />
            <Route onUpdate={window.scrollTo(0, 0)} path="/technologie" component={PageTechnologie} />
            <Route onUpdate={window.scrollTo(0, 0)} path="/don_troc" component={PageDonTroc} />
            <Route onUpdate={window.scrollTo(0, 0)} path="/occasions" component={PageOccasions} />
            <Route onUpdate={window.scrollTo(0, 0)} path="/reparation" component={PageReparation} />
            <Route onUpdate={window.scrollTo(0, 0)} path="/sengager" component={PageSengager} />
            <Route onUpdate={window.scrollTo(0, 0)} path="/categories" component={PageCatégories} />
          </Switch>
        </section>
        <Container fluid className="footer">
          <ul>
            <li>
                <a>Mentions Légales</a>
            </li>
            <li>
                <a>Contactez-nous</a>
            </li>
          </ul>
        </Container>
      </div>
    );
  }
}

export default App;
