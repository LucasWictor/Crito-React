import React, { useState, useEffect } from 'react';
import './MeetOurTeam.css';
import Palmer from '@images/Palmer.png';
import Aubri from '@images/Aubri.png';
import Hansen from '@images/Hansen.png';
import Willoman from '@images/Willoman.png';




const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: 'Kristine Palmer',
      position: 'Chef Operation Officer',
      image: Palmer,
    },
    {
      name: 'Mark Aubri',
      position: 'Senior Consultant',
      image: Aubri,
    },
    {
      name: 'Kimberly Hansen',
      position: 'Senior Consultant',
      image: Hansen
    },
    {
      name: 'Justin Willoman',
      position: 'Senior Tech Consultant',
      image: Willoman,
    },
  ];

  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentMemberIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMemberIndex((currentMemberIndex + 1) % teamMembers.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentMemberIndex, teamMembers.length]);

  return (
    <section className="meetteam-section">
      <div className="container">
        <div className="section-title">
          <p>Meet Our Team</p>
          <h2>Experience Team Members</h2>
        </div>

        <div className="team-carousel">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`member ${index === currentMemberIndex ? 'active' : ''}`}
            >
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          ))}
        </div>

        <div className="carousel-dots">
          {teamMembers.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentMemberIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;