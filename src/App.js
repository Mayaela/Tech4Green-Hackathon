import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchBar from './components-pages/SearchBar';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {/* <Route onUpdate={window.scrollTo(0, 0)} exact path="/" component={HomePage} /> */}
          {/* <Route onUpdate={window.scrollTo(0, 0)} path="/alimentation" component={PageAlimentation} />
          <Route onUpdate={window.scrollTo(0, 0)} path="/mode" component={PageMode} />
          <Route onUpdate={window.scrollTo(0, 0)} path="/sante_beaute" component={PageSanteBeaute} />
          <Route onUpdate={window.scrollTo(0, 0)} path="/maison_ecolo" component={PageMaisonEcolo} />
          <Route onUpdate={window.scrollTo(0, 0)} path="/transports" component={PageTransports} />
          <Route onUpdate={window.scrollTo(0, 0)} path="/technologie" component={PageTechnologie} />
          <Route onUpdate={window.scrollTo(0, 0)} path="/don_troc" component={PageDonTroc} />
          <Route onUpdate={window.scrollTo(0, 0)} path="/occasions" component={PageOccasions} />
          <Route onUpdate={window.scrollTo(0, 0)} path="/reparation" component={PageReparation} />
          <Route onUpdate={window.scrollTo(0, 0)} path="/sengager" component={PageSengager} /> */}
        </Switch>
        <SearchBar />
      </div>
    );
  }
}

export default App;
