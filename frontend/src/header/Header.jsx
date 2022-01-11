import React from 'react';
import './header.css'

const Header = () => {
    return (
      <div className="header">
        <div className="headerTitles">
          <h1 className="headerTitleSmall">Influentia</h1>
          <span className="headerTitleLarge">Blog</span>
        </div>
        <img
          className="headerImg"
          src="https://images.unsplash.com/photo-1641238215950-9e0435966e20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="headerimage"
        />
      </div>
    );
};

export default Header;