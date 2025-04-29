import React, { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Registered successfully!');
    // Add functionality to handle registration logic
  };

  return (
    <div>
      <h2>Register for an Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;