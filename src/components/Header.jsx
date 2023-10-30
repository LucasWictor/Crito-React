import React from 'react';
import logotype from '@images/logotype.svg';

function Header() {
  return (
    <div className="wrapper-grid">
      <header>
        <div className="container">
          <button className="btn-menubars">
            <i className="fa-solid fa-bars-staggered"></i>
          </button>
          <div className="logotype">
            <a href="index.html">
              <div className="Image-logotype">
                <img src={logotype} alt="Showcase image of a man with a tablet" />
              </div>
            </a>
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
              <a className="active" href="index.html">
                Home
              </a>
              <a href="services.html">Service</a>
              <a href="news.html">News</a>
              <a href="contacts.html">Contact</a>
            </nav>
            <a className="btn-yellow" href="login.html">
              Login
              <i className="fa-regular fa-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
