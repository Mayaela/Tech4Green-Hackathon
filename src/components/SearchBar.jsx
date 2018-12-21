import React, { Component } from 'react';
import Applist from '../applist.json';
import escapeRegExp from 'escape-string-regexp';
import { Link } from 'react-router-dom';
import {Container} from 'reactstrap';
import './SearchBar.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    }
  }

  updateQuery = (query) => {
    this.setState({
      query: query.trim()
    })
  }


  render() {
    let showingApplications = [];
    if(this.state.query){
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingApplications = Applist.filter((appli) => match.test(appli.Company))
    } else{
      showingApplications = [];
    }

    return (
      <Container fluid className="SearchBar">
        <input
          type="text"
          value={this.state.query}
          onChange={event => this.updateQuery(event.target.value)}
          placeholder="Chercher Application"
        />
        <ul className='application-list'>
          {showingApplications.map((appli) => (
            <Link to={`/application/${appli.Company.split(" ").join("").toLowerCase()}`}><li key={appli.id} className='application-list-name'>
              {appli.Company}
            </li>
            </Link>
          ))
          }
        </ul>
      </Container>
    );
  }
}

export default SearchBar;