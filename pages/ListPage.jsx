import React from 'react';
import Header from '../components/Header';
import List from '../components/List';

import data from '../data/sabiedriskas_tualetes_23_02_16.csv';

class ListPage extends React.Component {
  render() {
    return (
      <div className="pepo-container">
        <Header />
        <main className="pepo-content">
          <List data={data} />
        </main>
      </div>
    );
  }
}

export default ListPage;
