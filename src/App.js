import React, { useState } from 'react';
import './style.css';
import Profile from './components/Profile';
import Login from './components/Login';

import { LoginContext } from './contexts/LoginContext';

export default function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUserName] = useState('');

  return (
    <div>
      <LoginContext.Provider value={{ username, setUserName, setShowProfile }}>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}
