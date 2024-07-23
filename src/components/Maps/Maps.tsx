import "leaflet/dist/leaflet.css";
import "./Maps.css";

import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";

function Maps({ tabContent }: any) {
  const position: LatLngExpression = [parseFloat(tabContent.details.lat), parseFloat(tabContent.details.long)];
  return (
    <div>
      <MapContainer
        center={position}
        zoom={14}
        scrollWheelZoom={true}
        className="map-container"
      >
        <TileLayer
          //   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
        />
      </MapContainer>
    </div>
  );
}

export default Maps;
