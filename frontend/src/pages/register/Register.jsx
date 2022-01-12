import React from 'react';
import { Link } from 'react-router-dom';
import './register.css'

const Register = () => {
    return (
      <div>
        <div className="register">
          <h2 className="registerTitle">Inscription</h2>
          <form className="registerForm">
            <label>Pseudo</label>
            <input type="text" className="registerInput" placeholder="Pseudo" />
            <label>Email</label>
            <input
              type="text"
              className="registerInput"
              placeholder="Entrer votre email ..."
            />
            <label>Mot de passe</label>
            <input
              type="text"
              className="registerInput"
              placeholder="Entrer votre mot de passe ..."
            />
            <button className="registerButton">S'enregistrer</button>
          </form>
          <button className="registerLoginButton">
            <Link className='link' to="/login">Se connecter</Link>
          </button>
        </div>
      </div>
    );
};

export default Register;