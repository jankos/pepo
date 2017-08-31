import React from 'react';
import Header from '../components/Header';
import List from '../components/List';

import data from '../data/toilets.json';

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
