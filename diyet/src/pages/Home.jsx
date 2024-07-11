// src/pages/Home.jsx

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/login'); // Kullanıcı giriş yapmamışsa login sayfasına yönlendir
    }
  }, [navigate]); 

  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default Home;
