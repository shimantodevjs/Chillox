import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComp = () => {
  const locations = [
    { name: 'Dhanmondi', latitude: 23.74017762062279, longitude: 90.37482770857463 },
    { name: 'Banani', latitude: 23.790235433391, longitude: 90.40801785090395 },
    { name: 'Uttara', latitude: 23.874664951517357, longitude: 90.39237422392368 },
    { name: 'Mohakhali', latitude: 23.779912093250193, longitude: 90.40715355853688 },
    { name: 'Chattogram', latitude: 22.365207348133108, longitude: 91.82510375991595 },
    { name: 'Mymensingh', latitude: 24.7600068674934, longitude: 90.4009080857273 },   
  ];


  const [currentLocation, setCurrentLocation] = useState(locations[0]);

  useEffect(() => {
    let map;

    if (!map) {
      // Create a new map if it doesn't exist
      map = L.map('map').setView([currentLocation.latitude, currentLocation.longitude], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map);

      L.marker([currentLocation.latitude, currentLocation.longitude]).addTo(map);
    } else {
      // Update the existing map's view and marker position
      map.setView([currentLocation.latitude, currentLocation.longitude], 13);
      map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          layer.setLatLng([currentLocation.latitude, currentLocation.longitude]);
        }
      });
    }

    // Clean up existing map instance before component unmounts or before creating a new map
    return () => {
      map && map.remove();
    };
  }, [currentLocation]);

  const handleLocationChange = (location) => {
    setCurrentLocation(location);
  };

  return (
    <div>
      
      <div className='grid grid-cols-6 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-4 px-5 mb-10'>
        {locations.map((location) => (
          <button 
            key={location.name} 
            onClick={() => handleLocationChange(location)}
            className={`px-4 py-2 ${
              currentLocation.latitude === location.latitude && currentLocation.longitude === location.longitude 
              ? 'bg-white text-brand outline-brand' : 'bg-brand'
            }`}
          >
            {location.name}
          </button>
        ))}
      </div>
      <div>

      <div >
      <div id="map" style={{ height: '400px', margin: '20px' , boxShadow: '2px 4px 16px rgba(0,0,0,0.5)'
             , zIndex:'1' }} ></div>
      </div>

      
      </div>
    </div>
  );
};

export default MapComp;


