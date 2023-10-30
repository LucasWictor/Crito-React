import React from 'react';
import showcaseimage from '@images/mantablet.svg';

const Showcase = () => {
  return (
    <section className="showcase">
      <div className="container">
        <div className="content">
          <h1>We Provide The Best Business Solutions</h1>
          <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
          <a className="btn-yellow" href="consulting.html">Get Consulting <i className="fa-regular fa-arrow-up-right"></i></a>
          <a className="btn-blank" href="consulting.html">Learn More <i className="fa-regular fa-arrow-up-right"></i></a>
        </div>
        <div className="Image-showcase">
          <img src={showcaseimage} alt="Showcase image of a man with a tablet" />
        </div>
      </div>
    </section>
  );
}

export default Showcase;
