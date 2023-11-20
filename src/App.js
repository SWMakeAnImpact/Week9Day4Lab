import React, { useState, useEffect } from 'react';
import './App.css';
import { getAllStarships } from './services/sw-api'; 
import StarshipCard from './StarshipCard'; // Import the StarshipCard component

function App() {
  // State variable to store the starships data
  const [starships, setStarships] = useState([]);

  // useEffect to fetch starship data when the component mounts
  useEffect(() => {
    getAllStarships()
      .then(data => setStarships(data.results)) // Store the fetched data in the state
      .catch(error => console.error('Fetching starships failed:', error)); // Catch any errors during fetch
  }, []); // The empty array ensures this effect runs only once, when the component mounts

  return (
    <div className="App">
      <header className="App-header">
        <h1>Star Wars Starships</h1>
        <div className="starships-container">
          {/* Map over the starships and display a card for each */}
          {starships.map(starship => (
            <StarshipCard key={starship.name} starship={starship} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
