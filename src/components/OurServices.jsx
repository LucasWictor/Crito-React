import React from "react";
import Servicebox from "./Servicebox";
import Button from "../generics/Button"; 
import backgroundlines from '@images/background-lines.svg';

const services = [
  { title: "Business Advice", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ratione delectus.", url: "" },
  { title: "Startup Business", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ratione delectus.", url: "" },
  { title: "Financial Advice", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ratione delectus.", url: "" },
  { title: "Risk Management", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ratione delectus.", url: "" },
];

const OurServices = () => {
  return (
    <>
      <section className="service-box">
        <div className="container">
          <div className="section-title">
            <p>Our services.</p>
            <h2>We provide the best service for consulting</h2>
          </div>
          <div className="boxes">
            {services.map((service, index) => (
              <Servicebox key={index} title={service.title} description={service.description} url={service.url} />
            ))}
          </div>
          <div className="btnbrowse">
            <Button type="blank" url="index.html" title="Browse Services" />
          </div>
          <div>
            <img
               className="backgroundlines"
               src={backgroundlines} 
               alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;