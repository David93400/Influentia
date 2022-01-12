import React from 'react';
import './sidebar.css';

const SideBar = () => {
    return (
      <div className="sidebar">
        <div className="sidebarItem">
          <h2 className="sidebarTitle"> About Us</h2>
          <img
            src="https://media.licdn.cn/dms/image/C4D0BAQFqz_Vm3mFNaQ/company-logo_200_200/0/1611070283649?e=2159024400&v=beta&t=tQ1ftcl_m-ITUhFw2jTUpROHE5rA1fuuCGuNY-ceaig"
            alt="logo"
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
            iusto expedita. Cumque officia mollitia blanditiis omnis. Eum
            assumenda a dicta, culpa voluptate maxime quod facilis tempore ut
            veritatis sapiente quis?
          </p>
        </div>
        <div className="sidebarItem">
          <h2 className="sidebarTitle">Suivez-nous</h2>
          <div className="sidebarSocial">
            <i className=" sidebarIcon fab fa-facebook"></i>
            <i className=" sidebarIcon fab fa-twitter"></i>
            <i className=" sidebarIcon fab fa-linkedin"></i>
            <i className=" sidebarIcon fab fa-instagram"></i>
            <i className=" sidebarIcon fab fa-pinterest"></i>
          </div>
        </div>
      </div>
    );
};

export default SideBar;
