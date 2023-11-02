import React from 'react';
import hands from '@images/hands.svg';
import lampicon from '@images/lampicon.svg';
import stats from '@images/stats.svg';
import riskicon from '@images/riskicon.svg';

function FeatureSection() {
  return (
    <section className="feature-section container">
      <div className="section-title">
        <p>Features.</p>
        <h2>Our accounting is Trusted by thousands of companies.</h2>
        <div className="loginbtn">
          <a className="btn-learnmore" href="index.html">
            Learn more <i className="fa-regular fa-arrow-up-right"></i>
          </a>
        </div>
      </div>
      <div className="feature-box">
        <article className="features1">
          <img src={hands} alt="Business Advice Icon" />
          <h3>Business Advice</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </article>
        <article className="features1">
          <img src={lampicon} alt="Startup Business Icon" />
          <h3>Startup Business</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>
      </div>
      <div className="feature-box">
        <article className="features1">
          <img src={stats} alt="Financial Advice Icon" />
          <h3>Financial Advice</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>
        <article className="features1">
          <img src={riskicon} alt="Risk Management Icon" />
          <h3>Risk Management</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>
      </div>
    </section>
  );
}

export default FeatureSection;