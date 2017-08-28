import React from 'react';
import ReactDOM from 'react-dom';
import { apikey } from '../gmak.json';

const EIFFEL_TOWER_POSITION = {
  lat: 48.858608,
  lng: 2.294471
};

class Gmap extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    window.initMap = this.initMap;
    loadJS(`https://maps.googleapis.com/maps/api/js?key=${apikey}&callback=initMap`);
  }

  initMap() {
    /*global google */
    window.map = new google.maps.Map(ReactDOM.findDOMNode(window.pmap), {
      center: EIFFEL_TOWER_POSITION,
      zoom: 16
    });
  }

  render() {
    return (
      <div ref={(map) => window.pmap = map} className="pepo-map" id="pepo-map">
        Map!
      </div>
    );
  }
}

function loadJS(src) {
  let ref = window.document.getElementsByTagName('script')[0];
  let script = window.document.createElement('script');
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
}

export default Gmap;
