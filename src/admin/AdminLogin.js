import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      navigate('/admin/dashboard');
    } catch (err) {
      alert('Login failed: ' + err.message);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Admin Login</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <br /><br />
      <input type="password" placeholder="Password" value={pass} onChange={e => setPass(e.target.value)} />
      <br /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;
