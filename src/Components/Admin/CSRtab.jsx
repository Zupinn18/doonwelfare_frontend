import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./csr.css";
const CSRtab = () => {
  const [csrData, setCSRData] = useState([]);

  // Function to fetch CSR data from the server using Axios
  const fetchCSRData = async () => {
    try {
      const response = await axios.get('https://ngo-node.onrender.com/api/data');
      if (!response.data) {
        throw new Error('Failed to fetch CSR data');
      }
      setCSRData(response.data.csrData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Call the function to fetch CSR data when the component mounts
    fetchCSRData();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <div>
      <h2>CSR data</h2>
      <table className="csr-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {csrData.map((csrEntry) => (
            <tr key={csrEntry._id}>
              <td>{csrEntry?.email}</td>
              <td>{csrEntry?.mobileNumber}</td>
              <td>{csrEntry?.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CSRtab;
