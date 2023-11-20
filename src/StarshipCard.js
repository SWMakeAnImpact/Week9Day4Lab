import React from 'react';
import './StarshipCard.css'; // Separate CSS file for styling the cards

// This component receives a 'starship' prop and displays its details
function StarshipCard({ starship }) {
  return (
    <div className="starship-card">
      <h2>{starship.name}</h2>
      {/* If I need more details to display */}
      <p>Model: {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      {/* Can add more paragraphs or elements */}
    </div>
  );
}

export default StarshipCard;
