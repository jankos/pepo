import React from 'react';
import Header from '../components/Header';
import Gmap from '../components/Gmap.jsx';

import data from '../data/sabiedriskas_tualetes_23_02_16.csv';

class HomePage extends React.Component {
  render() {
    return (
      <div className="pepo-container">
        <Header />
        <main className="pepo-content">
          <Gmap data={data} />
        </main>
      </div>
    );
  }
}

export default HomePage;
