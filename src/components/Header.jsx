import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logotype from '@images/logotype.svg';


function Header() {
  const [loginPopupVisible, setLoginPopupVisible] = useState(false);

  const handleLoginClick = () => {
    setLoginPopupVisible(!loginPopupVisible);
  };

  return (
    <div className="wrapper-grid">
      <header>
        <div className="container">
          <button className="btn-menubars">
            <i className="fa-solid fa-bars-staggered"></i>
          </button>
          <div className="logotype">
            <NavLink to="/">
              <div className="Image-logotype">
                <img src={logotype} alt="Showcase image of a man with a tablet" />
              </div>
            </NavLink>
          </div>
          <div className="contactinformation-bar">
            <div className="content-box">
              <i className="fa-light fa-phone-volume"></i> +46 (8) 121 470 50
            </div>
            <div className="content-box">
              <i className="fa-light fa-envelope"></i> info@crito.se
            </div>
            <div className="content-box last">
              <i className="fa-light fa-location-dot"></i> Sveavägen 31, 111 34 STOCKHOLM
            </div>
          </div>
          <div className="socialmedia-bar">
            <div className="socialmedia">
              <a href="https://www.facebook.com" target="_blank">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank">
                <i className="fa-brands fa-square-x-twitter"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="menu">
            <nav>
              <NavLink to="/" activeClassName="active" exact>
                Home
              </NavLink>
              <NavLink to="/services" activeClassName="active">
                Service
              </NavLink>
              <NavLink to="/news" activeClassName="active">
                News
              </NavLink>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </nav>
            <button onClick={handleLoginClick} className="btn-yellow">
              Login <i className="fa-regular fa-arrow-up-right"></i>
            </button>
          </div>
        </div>
      </header>

      {loginPopupVisible && (
        <div className="login-popup">
          <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />

            <button type="submit">Login</button>
          </form>
          <button className="close-button" onClick={handleLoginClick}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
