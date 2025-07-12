import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./landing_page/Navbar.jsx";
import React from 'react';

import './index.css'
import HomePage from './landing_page/home/homePage.jsx';
 
function ScrollToTop() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <Navbar/>
    <ScrollToTop /> {/* Add ScrollToTop here */}
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
   
  </BrowserRouter>
)
