import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import JobSearch from './Components/JobSearch';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Auth0Provider
    domain="dev-4p1c8ufdtgrvebgr.us.auth0.com"
    clientId="bCp2by4O0uBJXdlPG0opaPpQlbHxm37x"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
       <Navbar />
       <JobSearch></JobSearch>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About/>} />

      </Routes>
      
  </Auth0Provider>
  </BrowserRouter>
);
