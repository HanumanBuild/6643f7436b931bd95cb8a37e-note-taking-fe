import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Register with:', username, email, password);
  };

  return (
    <form onSubmit={handleSubmit} className='container mx-auto p-4'>
      <label className='block'>
        Username:
        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className='mt-1 block w-full' />
      </label>
      <label className='block mt-4'>
        Email:
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='mt-1 block w-full' />
      </label>
      <label className='block mt-4'>
        Password:
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='mt-1 block w-full' />
      </label>
      <button type='submit' className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;