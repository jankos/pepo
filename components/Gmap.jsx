import React from 'react';
import ReactDOM from 'react-dom';
import { apikey } from '../gmak.json';

const DEFAULT_POSITION = {
  lat: 56.9715833,
  lng: 23.9890794
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
      center: DEFAULT_POSITION,
      zoom: 13
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
