import React, { useState } from 'react';
import API from '../api'; // Import the configured Axios instance

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await API.post('/login', { username, password });
      console.log('Login successful:', response.data);
      // Redirect or handle login success
    } catch (error) {
      console.error('Login failed:', error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type='submit'>Login</button>
    </form>
  );
};

export default LoginForm;