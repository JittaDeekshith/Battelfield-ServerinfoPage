import React from 'react';
import './components/MapRotation.css';

const MapRotation = () => {
  return (
    <div className="map-rotation">
      <h4>MAP ROTATION</h4>
      <div className="map-scroll">
        <img src="/assets/map1.jpg" alt="Map 1" />
        <img src="/assets/map2.jpg" alt="Map 2" />
        <img src="/assets/map3.jpg" alt="Map 3" />
        <img src="/assets/map4.jpg" alt="Map 4" />
      </div>
    </div>
  );
};

export default MapRotation;
