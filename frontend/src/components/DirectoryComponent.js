import React from 'react';

const DirectoryComponent = ({ directory }) => {
  return (
    <div>
      <h2>Campus Directory</h2>
      <ul>
        {directory.map((entry, index) => (
          <li key={index}>
            <strong>{entry.name}</strong><br />
            Contact: {entry.contact}<br />
            Location: {entry.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DirectoryComponent;
