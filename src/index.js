import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import App from './App';
import DA from './pages/DA';
import CS1 from './pages/CS1';
import CS2 from './pages/CS2';
import NotFound from './pages/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <>
      <Navbar />
      <BrowserRouter basename="/marks-gate-24">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="da" element={<DA/>} />
          <Route path="cs1" element={<CS1/>} />
          <Route path="cs2" element={<CS2/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  </React.StrictMode>
);