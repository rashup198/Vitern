import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css';
import App from './App';
import Navbar from './Components/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className=''>
    <Auth0Provider
    domain="dev-4p1c8ufdtgrvebgr.us.auth0.com"
    clientId="bCp2by4O0uBJXdlPG0opaPpQlbHxm37x"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  </div>
  
);
