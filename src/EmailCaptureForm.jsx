import React, { useState } from 'react';
import axios from 'axios';
import './EmailCaptureForm.css';


const EmailCaptureForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email to Airtable using axios
    axios.post('https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Emails', {
      fields: {
        Email: email,
      },
    }, {
      headers: {
        'Authorization': 'Bearer ${process.env.AIRTABLE_API_KEY}',
      },
    }).then(response => {
      console.log(response);
    }).catch(error => {
      console.error(error);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="email-form">
      <label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Explorer@Peromia.com" />
      </label>
      <button type="submit" className="signup-button">Get Updates</button>
    </form>
  );
};

export default EmailCaptureForm;
