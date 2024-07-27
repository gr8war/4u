
import NAVBAR from '../Navbar/Navbar.jsx';
import React, { useState } from 'react';
import "./SimulationPage.css";

const SimulationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    malicious_link: '',
    recipient_email: ''
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    // Optionally, you could also clear the form fields
    // setFormData({ name: '', email: '' });
  };

  return (
    <div>
      <NAVBAR/>
      <div className='txt'><h1>Phishing</h1></div>
      <div className='middle'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"> Sender Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Sender Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="name"> Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="name"> Message:</label>
          <input
            type="text"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="name"> Malicious Link:</label>
          <input
            type="text"
            id="malicious_link"
            name="malicious_link"
            value={formData.malicious_link}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="name"> Recipient Email:</label>
          <input
            type="text"
            id="recipient_email"
            name="recipient_email"
            value={formData.recipient_email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Generate</button>
      </form>
      {submittedData && (
        <div>
          <h2>Generated Data:</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Subject:</strong> {submittedData.subject}</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default SimulationPage;