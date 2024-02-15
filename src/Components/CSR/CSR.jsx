import React, { useState } from 'react';

const CSR = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your API endpoint
      const response = await fetch('https://ngo-node.onrender.com/api/csr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        // Reset the form after successful submission
        setFormData({
          name: '',
          email: '',
          mobileNumber: '',
          message: '',
        });
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="container" style={{ paddingTop: '150px' }}>
        <div className="row">
          <div className="col-md-6 offset-md-3" style={{
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            borderRadius: '8px',
            background: 'linear-gradient(45deg, #00a8cc, red)',
            animation: 'gradientAnimation 5s infinite alternate', // Apply animation
          }}>
            <h2><strong>CSR Contribution Form</strong></h2>
            <form onSubmit={handleSubmit} >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobileNumber" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CSR;
