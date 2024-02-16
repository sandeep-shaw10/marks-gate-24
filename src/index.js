import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import App from './App';
import DA from './pages/DA';
import CS1 from './pages/CS1';
import CS2 from './pages/CS2';
import NotFound from './pages/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "da",
    element: <DA/>,
  },
  {
    path: "cs1",
    element: <CS1/>,
  },
  {
    path: "cs2",
    element: <CS2/>,
  },
  {
    path: "*",
    element: <NotFound/>
  }
]);

root.render(
  <React.StrictMode>
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  </React.StrictMode>
);