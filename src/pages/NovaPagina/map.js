import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Importar os ícones do Leaflet
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

function Map() {
  useEffect(() => {
    // Definir os ícones padrão do Leaflet
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: icon,
      iconUrl: icon,
      shadowUrl: iconShadow,
    });
  }, []);

  return (
    <main>
    <div>
        <h1> Buscar Estabelecimento por Localização</h1>
        <p>   </p>
      <MapContainer center={[-8.0475622, -34.8769643]} zoom={13} style={{ height: "400px" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>

    </div>
  </main>
  );
}

export default Map;
