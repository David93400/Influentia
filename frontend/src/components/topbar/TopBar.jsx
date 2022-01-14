import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './topbar.css';

const TopBar = () => {
  let admin;
  const { user, dispatch } = useContext(Context);

  if (user) {
    admin = user.isAdmin;
  }

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <>
      <div className="top">
        <div className="topLeft">
          <i className=" topIcon fab fa-facebook"></i>
          <i className=" topIcon fab fa-twitter"></i>
          <i className=" topIcon fab fa-linkedin"></i>
          <i className=" topIcon fab fa-instagram"></i>
          <i className=" topIcon fab fa-pinterest"></i>
        </div>

        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/">
                A PROPOS
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/">
                CONTACT
              </Link>
            </li>
            <li className="topListItem">
              {admin && (
                <Link className="link" to="/write">
                  ECRIRE
                </Link>
              )}
            </li>
            <li className="topListItem" onClick={handleLogout}>
              {user && 'SE DECONNECTER'}
            </li>
          </ul>
        </div>

        <div className="topRight">
          {user ? (
            <img
              className="imgLogo"
              src="https://www.reseau-entreprendre.org/val-de-marne/wp-content/uploads/sites/28/2021/03/logo.png"
              alt="logo"
            />
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  Connexion
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  Inscription
                </Link>
              </li>
            </ul>
          )}

          <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>
    </>
  );
};

export default TopBar;
