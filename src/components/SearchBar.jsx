import React, { Component } from 'react';
import Applist from '../applist.json';
import escapeRegExp from 'escape-string-regexp';
import Link from 'react-dom';

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
      <div className="SearchBar">
        <input
          type="text"
          value={this.state.query}
          onChange={event => this.updateQuery(event.target.value)}
          placeholder="Chercher Application"
        />
          <button className="button-green">Chercher</button>
        <ul className='application-list'>
          {showingApplications.map((appli) => (
            <li key={appli.id} className='application-list-name'>
              {appli.Company}
            </li>
          ))
          }
        </ul>
      </div>
    );
  }
}

export default SearchBar;