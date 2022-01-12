import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className="login">
      <h2 className="loginTitle">Connection</h2>
      <form className="loginForm">
        <label>Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Entrer votre email ..."
        />
        <label>Mot de passe</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Entrer votre mot de passe ..."
        />
        <button className="loginButton">Se connecter</button>
      </form>
      <button className="loginRegisterButton">S'enregistrer</button>
    </div>
  );
};

export default Login;
