import React from 'react';
import Main from './Main';

class Pepo extends React.Component {
  render() {
    return (
      <div>
        <Main data={this.props.data} />
      </div>
    );
  }
}

export default Pepo;
