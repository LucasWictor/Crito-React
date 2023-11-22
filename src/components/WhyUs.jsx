import React from 'react';
import thumbsUpIcon from '@images/thumbs-up.svg';
import diamondIcon from '@images/Diamond.svg';
import designIcon from '@images/design.svg';
import aiIcon from '@images/ai.svg';
import discussion from '@images/whyus.jpg';

const whyUsData = [
  {
    title: 'Process Excellence',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    iconSrc: thumbsUpIcon,
  },
  {
    title: 'Strategic Planning',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    iconSrc: diamondIcon,
  },
  {
    title: 'Experience Design',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    iconSrc: designIcon,
  },
  {
    title: 'Artificial Intelligence',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    iconSrc: aiIcon,
  },
];

const WhyUs = () => {
  return (
    <section className="Why-us">
      <div className="container">
        <div className="row">
          
          <div className="col-md-6">
            <div className="left-content">
              <div className="section-title">
                <p>Why Choose Us</p>
                <h2>Why We Are The Best Business Consulting Agency</h2>
              </div>
              {whyUsData.map((item, index) => (
                <div className="icon-group" key={index}>
                  <div className="icon">
                    <img src={item.iconSrc} alt={item.title} />
                  </div>
                  <div className="icon-text">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        
          <div className="col-md-6">
            <div className="content-right">
              <div className="picbox">
                <div className="gray-background"></div>
                <img src={discussion} alt="Två kvinnor diskuterar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;