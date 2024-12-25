import React, { useState, useEffect } from 'react';
import MapComponent from './components/MapComponent';
import DirectoryComponent from './components/DirectoryComponent';
import SearchComponent from './components/SearchComponent';
//import './App.css';

function App() {
  const [locations, setLocations] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [directory, setDirectory] = useState([]);

  useEffect(() => {
    // Fetch locations from backend
    fetch('http://127.0.0.1:5000/api/locations')
      .then(response => response.json())
      .then(data => {
        setLocations(data);
        setFilteredLocations(data);
      });

    // Fetch directory from backend
    fetch('http://127.0.0.1:5000/api/directory')
      .then(response => response.json())
      .then(data => setDirectory(data));
  }, []);

  const handleSearch = (query) => {
    const filtered = locations.filter(loc =>
      loc.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredLocations(filtered);
  };

  return (
    <div className="App">
      <h1>Campus Navigation and Directory</h1>
      <SearchComponent onSearch={handleSearch} />
      <MapComponent locations={filteredLocations} />
      <DirectoryComponent directory={directory} />
    </div>
  );
}

export default App;
