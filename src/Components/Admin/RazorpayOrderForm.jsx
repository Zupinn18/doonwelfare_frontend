import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentsList = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Fetch payments data from the backend API
    axios.get('https://ngo-node.onrender.com/api/razorpay_payments')
      .then(response => {
        // Set the payments state with the fetched data
        setPayments(response.data.items);
        console.log("data is ",response.data.items);
      })
      .catch(error => {
        // Handle errors
        console.error('Error fetching payments:', error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div>
      <h2>Payments</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Payment ID</th>
              <th>Amount</th>
              <th>Currency</th>
              <th>Status</th>
              <th>Payment Method</th>
              <th>UPI VPA</th>
              <th>Name</th> {/* Add Name column */}
              <th>Email</th>
              <th>Contact</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {payments.map(payment => (
              <tr key={payment.id}>
                <td>{payment.id}</td>
                <td>{(payment.amount / 100).toFixed(2)}</td>
                <td>{payment.currency}</td>
                <td className={payment.status === 'failed' ? 'failed' : (payment.status === 'captured' ? 'captured' : '')}>{payment.status}</td>
                <td>{payment.method}</td>
                <td>{payment.vpa}</td>
                <td>{payment.name}</td> {/* Display Name */}
                <td>{payment.email}</td>
                <td>{payment.contact}</td>
                <td>{new Date(payment.created_at * 1000).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style jsx>{`
        .table-container {
          overflow-x: auto;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          padding: 8px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }
        th {
          background-color: #f2f2f2;
          color: #333;
        }
        tr:hover {
          background-color: #f5f5f5;
        }
        .failed {
          color: red;
          font-weight: bold;
        }
        .captured {
          color: green;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default PaymentsList;
