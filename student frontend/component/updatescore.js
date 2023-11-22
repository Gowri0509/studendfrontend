// src/components/UpdateScore.js
import React, { useState } from 'react';

function UpdateScore() {
  const [name, setName] = useState('');
  const [newScore, setNewScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  fetch(`http://localhost:8080/api/sat-results/${name}/update-score/${newScore}`, {
      method: 'PUT',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Name not found');
        }
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <h2>Update Score</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>New Score:</label>
        <input type="number" value={newScore} onChange={(e) => setNewScore(e.target.value)} />
        <button type="submit">Update Score</button>
      </form>
    </div>
  );
}

export default UpdateScore;
