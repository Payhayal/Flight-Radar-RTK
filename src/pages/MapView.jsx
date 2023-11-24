import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import icon from "../assets/apln.png";
import L from "leaflet";

const MapView = ({openModal}) => {
  const store = useSelector((store) => store);

  // map uzerindeki marker icon`un degisimi
  const planeIcon = L.icon({
    iconUrl:icon,
    iconSize:[20, 20],
    iconAnchor:[16,16],
  });


  return (
    <div>
      <MapContainer
        center={[40.306686, -98.421462]}
        zoom={4.5}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {store.flights.map((flight) => (
          <Marker 
          icon={planeIcon} 
          key={flight.id} 
          position={[flight.lat, flight.lng]}>
            <Popup>
              <div className="popup">
                <span>Code:{flight.code}</span>
                <button onClick={() => openModal(flight.id)}>Details</button>
              </div>
            </Popup>
          </Marker>
        ))}
        <Polyline positions={store?.route} />
      </MapContainer>
    </div>
  );
};

export default MapView;
