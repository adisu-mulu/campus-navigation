import React from "react";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import '../components/style.css';

const Navigation = () => {

  return (
    <MapContainer center={[6.431332, 38.288733]} zoom={13}>
      
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        //       url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        // attribution='&copy; <a href="https://www.esri.com/">Esri</a> contributors'
    />
    <Marker position={[6.431332, 38.288733]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>

  );
};
export default Navigation;




// import React from "react";
// import { MapContainer } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import "leaflet.gridlayer.googlemutant"; // Import the Google Mutant library
// import L from "leaflet";

// const Navigation = () => {
//   const mapRef = React.useRef(null);

//   React.useEffect(() => {
//     if (mapRef.current) {
//       const map = mapRef.current;

//       // Add the Google Maps Satellite Tile Layer
//       const googleLayer = L.gridLayer.googleMutant({
//         type: "terrain", // 'roadmap', 'satellite', 'terrain', or 'hybrid'
//       });

//       map.addLayer(googleLayer);
//     }
//   }, []);

//   return (
//     <MapContainer
//       ref={mapRef}
//       center={[6.431332, 38.288733]} // Set your desired initial coordinates
//       zoom={13}
//       // style={{ height: "100vh", width: "100%" }}
//     />
//   );
// };

// export default Navigation;
