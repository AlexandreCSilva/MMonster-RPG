import React from 'react';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const navigate = useNavigate();
  return (
    <div className='Game'>
      HomePage
      <button onClick={() => navigate('/sign-in')}>Login</button>
    </div>
  );
};
