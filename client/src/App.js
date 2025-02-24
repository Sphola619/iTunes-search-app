import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file

const App = () => {
  const [term, setTerm] = useState('');
  const [media, setMedia] = useState('all');
  const [results, setResults] = useState([]);
  const [favourites, setFavourites] = useState([]);

  // Function to handle search
  const handleSearch = async () => {
    try {
      // Fetch the token from the server
      const tokenResponse = await axios.get('/api/token');
      const token = tokenResponse.data.token;

      // Make the search request with the token
      const response = await axios.get('/api/search', {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          term,
          media
        }
      });
      setResults(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to add to favourites
  const addToFavourites = (item) => {
    setFavourites([...favourites, item]);
  };

  // Function to remove from favourites
  const removeFromFavourites = (item) => {
    setFavourites(favourites.filter(fav => fav.trackId !== item.trackId));
  };

  return (
    <div className="container">
      <h1>iTunes Search App</h1>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search term"
      />
      <select value={media} onChange={(e) => setMedia(e.target.value)}>
        <option value="all">All</option>
        <option value="movie">Movie</option>
        <option value="podcast">Podcast</option>
        <option value="music">Music</option>
        <option value="audiobook">Audiobook</option>
        <option value="shortFilm">Short Film</option>
        <option value="tvShow">TV Show</option>
        <option value="software">Software</option>
        <option value="ebook">eBook</option>
      </select>
      <button onClick={handleSearch}>Search</button>
      <h2>Results</h2>
      <ul>
        {results.map(item => (
          <li key={item.trackId}>
            <img src={item.artworkUrl100} alt={item.collectionName} />
            <p>{item.collectionName} by {item.artistName} ({new Date(item.releaseDate).getFullYear()})</p>
            <button className="add" onClick={() => addToFavourites(item)}>Add to Favourites</button>
          </li>
        ))}
      </ul>
      <h2>Favourites</h2>
      <ul>
        {favourites.map(item => (
          <li key={item.trackId}>
            <img src={item.artworkUrl100} alt={item.collectionName} />
            <p>{item.collectionName} by {item.artistName} ({new Date(item.releaseDate).getFullYear()})</p>
            <button className="remove" onClick={() => removeFromFavourites(item)}>Remove from Favourites</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;