// src/components/InsertData.js
import React, { useState } from 'react';

function InsertData() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    country: '',
    pincode: '',
    satScore: 0,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8080/Student/addStudent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <h2>Insert Data</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />

        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleInputChange} />

        <label>city:</label>
        <input type="text" name="city" value={formData.city} onChange={handleInputChange} />

        <label>country:</label>
        <input type="text" name="country" value={formData.country} onChange={handleInputChange} />

        <label>satScore:</label>
        <input type="text" name="satscore" value={formData.satScore} onChange={handleInputChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default InsertData;
