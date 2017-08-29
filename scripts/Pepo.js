import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ListPage from '../pages/ListPage';
import AboutPage from '../pages/AboutPage';

class Pepo extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/list" component={ListPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </Router>
    );
  }
}

export default Pepo;
