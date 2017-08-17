import React from 'react';
import Header from './Header';
import List from './List';

import data from '../data/sabiedriskas_tualetes_23_02_16.csv';

class Main extends React.Component {
  render() {
    return (
      <div className="pepo-container">
        <Header />
        <List data={data} />
      </div>
    );
  }
}

export default Main;
