import React from 'react';
import ReactDOM from 'react-dom';
import { apikey } from '../config.json';

class Gmap extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    window.initMap = this.initMap.bind(this);
    const url = `https://maps.googleapis.com/maps/api/js?key=${apikey}&language=en_us&callback=initMap`;
    if (checkJS(url)) {
      loadJS(url);
    } else {
      window.initMap();
    }
  }

  initMap() {
    /*global google */
    window.map = new google.maps.Map(ReactDOM.findDOMNode(window.pmap));

    window.bounds = new google.maps.LatLngBounds();

    for( let i = 0; i < this.props.data.length; i++ ) {
      var position = new google.maps.LatLng(this.props.data[i]['lat'], this.props.data[i]['lng']);
      window.marker = new google.maps.Marker({
        position: position,
        map: window.map,
        title: this.props.data[i]['name']
      });
      window.bounds.extend(position);
    }

    window.map.fitBounds(window.bounds);
  }

  render() {
    return (
      <div ref={(map) => window.pmap = map} className="pepo-map" id="pepo-map">
        Map!
      </div>
    );
  }
}

function checkJS(src) {
  const scripts = window.document.getElementsByTagName('script');
  for(let a = 0; a < scripts.length; a++) {
    if (scripts[a].src == src) {
      return false;
    }
  }
  return true;
}

function loadJS(src) {
  let ref = window.document.getElementsByTagName('script')[0];
  let script = window.document.createElement('script');
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
}

export default Gmap;
