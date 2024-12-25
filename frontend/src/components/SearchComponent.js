import React, { useState } from 'react';

const SearchComponent = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a location..."
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchComponent;
