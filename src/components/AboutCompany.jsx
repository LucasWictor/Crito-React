import React from 'react';
import aboutlogo from '@images/aboutus.png';

const aboutData = {
  title: 'About Company',
  name: 'Samantha Brown',
  position: 'Founder',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
};

const AboutCompany = () => {
  return (
    <section className="aboutus-section">
      <div className="container">
        <div className="aboutbox">
          <div className="featurebox">
            <div className="imgbox">
              <img src={aboutlogo} alt="A woman walking with a tablet" />
              <div className="bluebox">
                <div className="toptext">
                  <h3>{aboutData.name},</h3>
                  <p>{aboutData.position}</p>
                </div>
                <div className="descriptiontext">
                  <p>"{aboutData.description}"</p>
                </div>
              </div>
            </div>
            <div className="section-title">
              <p>{aboutData.title}</p>
              <h2>We Are Business Consulting & Credit Repair Experts</h2>
              <div className="aboutcompanytxt">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ab velit, iste nostrum inventore
                  dolor obcaecati dolore natus. Reiciendis rerum ullam ipsum. Ea corporis quaerat ipsum optio. Quia,
                  nulla numquam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus laboriosam, neque architecto quasi
                  dolor nihil hic. Deserunt iusto rem numquam sit non magni nemo quasi saepe, odit nesciunt a atque.
                </p>
              </div>
              <div className="btnbrowse">
                <div className="learn-more-and-video">
                  <a className="btn-black" href="#">
                    Learn more <i className="fa-regular fa-arrow-up-right"></i>
                  </a>
                  <div className="introvideo">
                    <a className="playbutton" href="#">
                      <i className="fa-thin fa-circle-play fa-fade"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
