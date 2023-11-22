// src/components/DeleteRecord.js
import React, { useState } from 'react';

function DeleteRecord() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch(`http://localhost:8080/Student/${name}`, {
     method: 'DELETE',
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
      <h2>Delete Record</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Delete Record</button>
      </form>
    </div>
  );
}

export default DeleteRecord;
