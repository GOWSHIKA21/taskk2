import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from "../Store.js";
import "../styles/login.css"

export default function Login() {
  const [username, setUsername] = useState('');
  const [email,setEmail]=useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUserStore();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && email && password) {
      setUser(username, email); 
      navigate("/marks"); 
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <input type="email" placeholder="Email-id" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={handleLogin}>Submit</button>
    </div>
  );
}


