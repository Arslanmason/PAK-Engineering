import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet with Webpack/Vite
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapProps {
  position: [number, number];
  address: string;
}

export default function Map({ position, address }: MapProps) {
  return (
    <div className="h-[400px] w-full rounded-xl overflow-hidden shadow-inner border border-gray-200 z-0">
      <MapContainer 
        center={position} 
        zoom={15} 
        scrollWheelZoom={false} 
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <div className="text-pak-blue font-bold">PAK Engineering NIG LTD</div>
            <div className="text-xs text-gray-600">{address}</div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
