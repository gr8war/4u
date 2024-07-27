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
    // setFormData({ name: '', email: '', subject: '', message: '', malicious_link: '', recipient_email: '' });
  };

  return (
    <div>
      <NAVBAR />
      <div className='txt'><h1>Phishing Simulation</h1></div>
      <div className='middle'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Sender Name:</label>
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
            <label htmlFor="subject">Subject:</label>
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
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="malicious_link">Malicious Link:</label>
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
            <label htmlFor="recipient_email">Recipient Email:</label>
            <input
              type="email"
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
          <div className="email-preview">
            <h2>Email Preview:</h2>
            <div className="email-header">
              <p><strong>From:</strong> {submittedData.name} ({submittedData.email})</p>
              <p><strong>To:</strong> {submittedData.recipient_email}</p>
              <p><strong>Subject:</strong> {submittedData.subject}</p>
            </div>
            <div className="email-body">
              <p>{submittedData.message}</p>
              <a href={submittedData.malicious_link} target="_blank" rel="noopener noreferrer">Click here</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimulationPage;
