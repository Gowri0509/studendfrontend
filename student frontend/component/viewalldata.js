// src/components/ViewAllData.js
import React, { useEffect, useState } from 'react';

function ViewAllData() {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
   
    Example: fetch('http://localhost:8080/Student/allstudents')
      .then(response => response.json())
      .then(data => setAllData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h2>View All Data</h2>
      <pre>{JSON.stringify(allData, null, 2)}</pre>
    </div>
  );
}

export default ViewAllData;
