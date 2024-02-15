import React,{useState, useEffect} from 'react';
import './dash.css';
import axios from 'axios';


const DonationCard = ({ donation }) => {
  return (
    <div className=" mb-3" style={{ border: "1px solid", padding: "10px", borderRadius: "12px", background: "green", color: "white" }}>
      <div>
        <p className="card-title"><strong>Name: {donation?.name}</strong></p>
        <p className="card-text my-0 py-0">Phone Number: {donation?.mobileNumber}</p>
        <p className="card-text my-0 py-0">Amount: Rs {donation?.amount}</p>
        <p className="card-text my-0 py-0">State: {donation?.state}</p>
        <p className="card-text my-0 py-0">Type: {donation?.type}</p>
        <p className="card-text my-0 py-0">Email: {donation?.email}</p>
        <p className="card-text my-0 py-0">panNo: {donation?.panNo}</p>
      </div>
    </div>
  );
};


const DashboardTab = () => {

  const [donationsData, setDonationsData] = useState([]);
  
  useEffect(() => {
    // Fetch form submissions data
    getFormSubmit();
    // Fetch successful payments data
    getSuccessfulPayments();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const getFormSubmit = () => {
    axios.get('https://ngo-node.onrender.com/api/data')
      .then(response => {
        setDonationsData(response.data.donationForms);
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  const getSuccessfulPayments = () => {
    axios.get('https://ngo-node.onrender.com/api/razorpay_payments')
      .then(response => {
        setSuccessfulPayments(response.data.successfulPayments);
      })
      .catch(error => console.error('Error fetching successful payments:', error));
  }
  
    const formSubmissions = donationsData.filter(donation => donation.payment !== 'success');
    const successfulPayments = donationsData.filter(donation => donation.payment === 'success');
  
    return (
      <div className="container"> 
      <div className="row g-3">
        <div className="col-md-6">
          <div className="bg-info text-white p-4 rounded" style={{ borderRadius: '12px', fontSize: '18px' }}>
            <strong>All Form Submissions</strong>
            <div className="moving-line"></div>
            <br />
            Total: {formSubmissions.length}
          </div>
          <div className="mt-4" style={{ maxHeight: '400px', overflowY: 'auto' }}>
            <h2 className='ms-2 text-dark'> <strong>Form Submissions</strong></h2>
            <div className="row g-1 mt-2" style={{ whiteSpace: 'nowrap' }}>
              {formSubmissions.map(donation => (
                <div className="col-md-12 mb-1 mx-2" key={donation._id}>
                  <DonationCard donation={donation} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="bg-success text-white p-4 rounded" style={{ borderRadius: '12px', fontSize: '18px' }}>
            <strong>Successful Payments</strong>
            <div className="moving-line"></div>
            <br />
            Total: {successfulPayments.length}
          </div>
          <div className="mt-4" style={{ maxHeight: '400px', overflowY: 'auto' }}>
            <h2 className='ms-2 text-dark'> <strong>Successful Payments</strong></h2>
            <div className="row g-1 mt-2" style={{ whiteSpace: 'nowrap' }}>
              {successfulPayments.map(donation => (
                <div className="col-md-12 mb-1 mx-2" key={donation._id}>
                  <DonationCard donation={donation} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };
  
  export default DashboardTab;