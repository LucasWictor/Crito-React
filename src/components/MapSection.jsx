import React from 'react'


const MapSection = () => {
  return (
    <section className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16278.23510078001!2d18.041405769123628!3d59.33663697451191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d6799554e87%3A0x6562d2c842903003!2sSveav%C3%A4gen%2031%2C%20111%2034%20Stockholm!5e0!3m2!1ssv!2sse!4v1696430898894!5m2!1ssv!2sse"
        width="100%"
        height="400"
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default MapSection;