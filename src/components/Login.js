import React, { useContext } from 'react';
import { LoginContext } from '../contexts/LoginContext';
export default function Login() {
  const { setUserName, setShowProfile } = useContext(LoginContext);

  return (
    <>
      <input
        type="text"
        placeholder="Username..."
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <br />
      <input type="text" placeholder="Password..." />
      <br />
      <br />
      <button onClick={() => setShowProfile(true)}>Login</button>
    </>
  );
}
