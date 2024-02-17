import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import App from './App';
import Papers from './pages/Papers';
import DA_DATA from './answerKey/DA';
import CS1_DATA from './answerKey/CS1';
import CS2_DATA from './answerKey/CS2';
// import TEST_DATA from './answerKey/TEST';
import NotFound from './pages/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <>
      <Navbar />
      <BrowserRouter basename="/marks-gate-24">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path={DA_DATA.LINK} element={<Papers DATA={DA_DATA} />} />
          <Route path={CS1_DATA.LINK} element={<Papers DATA={CS1_DATA} />} />
          <Route path={CS2_DATA.LINK} element={<Papers DATA={CS2_DATA} />} />
          {/* <Route path={TEST_DATA.LINK} element={<Papers DATA={TEST_DATA} />} /> */}
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  </React.StrictMode>
);