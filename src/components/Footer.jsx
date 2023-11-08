import React from 'react';
import FooterLines from '@images/footer-lines.svg'
import LogotypeWhite from '@images/logotype-white.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-lines">
          <img className="footer-lines" src={FooterLines} alt="lines" />
        </div>
        <div className="logo">
          <img src={LogotypeWhite} alt="Logo" />
          <p className="logo-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-row">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Works</a>
            <a href="#">Career</a>
          </div>
          <div className="footer-row">
            <h4>Help</h4>
            <a href="#">Customer Support</a>
            <a href="#">Delivery Details</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="footer-row">
            <h4>Resources</h4>
            <a href="#">Free eBooks</a>
            <a href="#">Development Tutorial</a>
            <a href="#">How to - Blog</a>
            <a href="#">Youtube Playlist</a>
          </div>
          <div className="footer-row">
            <h4>Resources</h4>
            <a href="#">Free eBooks</a>
            <a href="#">Development Tutorial</a>
            <a href="#">How to - Blog</a>
            <a href="#">Youtube Playlist</a>
          </div>
        </div>
      </div>
      <div className="underline"></div>
      <div className="footer-bottom">
        <div className="copyright">
          <p> @ 2023 Crito - Consulting Company Inc. All Rights Reserved. </p>
        </div>
        <div className="social-media">
          <a href="https://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://www.twitter.com" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
          <a href="https://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://www.linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
