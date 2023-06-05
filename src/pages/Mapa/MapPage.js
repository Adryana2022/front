import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapPage = () => {
  useEffect(() => {
    // Certifique-se de incluir a biblioteca Leaflet CSS em seu projeto React
    // Você pode adicioná-la ao arquivo HTML principal ou importá-la no arquivo de estilo adequado.

    // Importando o CSS do Leaflet
  
  }, []);

  const locations = [
    { lat: -23.5505, lng: -46.6333 },
    // Adicione mais localizações aqui, se necessário
  ];

  return (
    <div>
      <h1>Mapa de Localizações</h1>
      <div id="map" style={{ height: '500px', width: '100%' }}>
        <MapContainer center={locations[0]} zoom={13}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {locations.map((location, index) => (
            <Marker key={index} position={location} />
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapPage;




