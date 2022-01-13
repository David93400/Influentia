import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css'
import axios from "axios"

const Register = () => {
   
  const [username, setUsername] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setError(false);
    try{
      
  const res = await axios.post("http://localhost:3000/api/auth/signup", {
    username,
    email,
    password,
  });
  res.data && window.location.replace("/login")
  }catch(err){
   setError(true);
  }
  }

    return (
      <div>
        <div className="register">
          <h2 className="registerTitle">Inscription</h2>
          <form className="registerForm" onSubmit={handleSubmit}>
            <label>Pseudo</label>
            <input
              type="text"
              className="registerInput"
              placeholder="Pseudo"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Email</label>
            <input
              type="text"
              className="registerInput"
              placeholder="Entrer votre email ..."
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Mot de passe</label>
            <input
              type="password"
              className="registerInput"
              placeholder="Entrer votre mot de passe ..."
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="registerButton" type='submit'>S'enregistrer</button>
          </form>
          <button className="registerLoginButton">
            <Link className="link" to="/login">
              Se connecter
            </Link>
          </button>
          {error && <span style={{color: "red", marginTop:"10px"}}>Une erreur s'est produite !</span>}
        </div>
      </div>
    );
};

export default Register;