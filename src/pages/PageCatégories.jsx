import React, { Component } from 'react';
import CardCategory from '../components/CardCategory';
class PageCatégories extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className="PageCatégories">
        <CardCategory />
      </div>
    );
  }
}

export default PageCatégories;
