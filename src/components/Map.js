import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

const Map = ({ lat, long, markerPopupText }) => {
  return (
    <MapContainer
      center={[lat, long]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: 400, zIndex: '1' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, long]}>
        <Popup>{markerPopupText ? markerPopupText : `${lat} , ${long}`}</Popup>
      </Marker>
      <MapUpdate center={[lat, long]} zoom={13} />
    </MapContainer>
  );
};

export default Map;

function MapUpdate(props) {
  const map = useMap();
  map.setView(props.center, props.zoom);
  return null;
}
