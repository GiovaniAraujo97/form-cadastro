import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = { email, senha };

    try {
      const response = await axios.post('http://localhost:5000/api/login', loginData);
      alert('Login bem-sucedido!');
      console.log('Token:', response.data.token);
    } catch (error) {
      alert('Erro ao fazer login');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
