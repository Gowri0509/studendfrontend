// src/components/GetRank.js
import React, { useState } from 'react';

function GetRank() {
  const [name, setName] = useState('');
  const [rank, setRank] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
fetch(`http://localhost:8080/Student/${id}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('id not found');
        }
      })
      .then(data => setRank(data))
      .catch(error => {
        console.error('Error:', error);
        setRank(null);
      });
  };

  return (
    <div>
      <h2>Get Rank</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Get Rank</button>
      </form>
      {rank !== null && <p>Rank: {rank}</p>}
    </div>
  );
}

export default GetRank;
