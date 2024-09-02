import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProfilePage from './ProfilePage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <ProfilePage />
  </React.StrictMode>
);

