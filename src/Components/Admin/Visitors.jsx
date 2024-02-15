import React from 'react';

const Visitors = () => {
  const redirectToGoogleTagManager = () => {
    const gtmUrl = 'https://tagmanager.google.com/';
    window.location.href = gtmUrl;
  };

  const redirectToPaytmDashboard = () => {
    // Replace 'YOUR_PAYTM_DASHBOARD_URL' with the actual URL of Paytm dashboard
    const paytmDashboardUrl = 'https://dashboard.paytm.com/next/transactions';
    window.location.href = paytmDashboardUrl;
  };

  return (
    <div>
      <h2>Check Website Visitors</h2>
      <button
        onClick={redirectToGoogleTagManager}
        style={{
          backgroundColor: '#3498db',
          color: '#fff',
          padding: '10px 15px',
          fontSize: '16px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginRight: '10px', // Added margin for spacing
        }}
      >
        Go to Google Tag Manager
      </button>

      <button
        onClick={redirectToPaytmDashboard}
        style={{
          backgroundColor: '#27ae60', // Green color
          color: '#fff',
          padding: '10px 15px',
          fontSize: '16px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Payment Analytics
      </button>
    </div>
  );
};

export default Visitors;
