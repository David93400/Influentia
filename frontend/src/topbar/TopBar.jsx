import React from 'react';
import './topbar.css' 

const TopBar = () => {
    return (
      <div>
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
              <li className="topListItem">HOME</li>
              <li className="topListItem">A PROPOS</li>
              <li className="topListItem">CONTACT</li>
              <li className="topListItem">ECRIRE</li>
              <li className="topListItem">LOGOUT</li>
            </ul>
          </div>

          <div className="topRight">
            <img className='imgLogo'
              src="https://www.reseau-entreprendre.org/val-de-marne/wp-content/uploads/sites/28/2021/03/logo.png"
              alt="logo"
            />
            <i className="topSearchIcon fas fa-search"></i>
          </div>
        </div>
      </div>
    );
};

export default TopBar;