import React, { useState } from 'react';
import './Events.css';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const events = [
    {
      id: 1,
      category: 'welfare',
      title: 'Student Mentorship Program (SMP)',
      description: 'An important initiative to connect seniors with freshers and mentor them throughout their first year journey, and further as a guide and support.',
      image: 'https://github.com/PraneetDixit/swg-events/blob/master/src/Assets/Images/SMP/SMP.jpeg?raw=true',
    },
    {
      id: 2,
      category: 'career',
      title: 'FORESIGHT',
      description: 'A blog-based initiative that gives all the guidance that a student needs to crack their dream internship. The blogs are published based on articles submitted by students of IIT Kharagpur who have already completed internships through CDC.',
      image: 'https://github.com/PraneetDixit/swg-events/blob/master/src/Assets/Images/Foresight%20Photos/Foresight.png?raw=true',
      link: 'https://swgiitkgp.org/placementblogs',
    },
    {
      id: 3,
      category: 'career',
      title: 'Off-Campus Talks',
      description: 'An offline session conducted to resolve all the doubts regarding the off-campus internship and placement opportunities.',
      image: 'https://github.com/PraneetDixit/swg-events/blob/master/src/Assets/Images/Off%20Campus%20Talks%20Photos/OffCampus.jpg?raw=true',
    },
    {
      id: 4,
      category: 'academic',
      title: 'Examania',
      description: 'An offline event conducted before mid-semester exams to guide the freshers. We provide students with essential resources, study materials, and links to past exam papers to help them succeed in mid-semester exams.',
      image: 'https://github.com/PraneetDixit/swg-events/blob/master/src/Assets/Images/Examania%20Photos/Examania.jpg?raw=true',
    },
    {
      id: 5,
      category: 'career',
      title: 'Career Orientation Session',
      description: 'Access curated study materials, previous year question papers, and preparation strategies for your semester exams. Our Exam Prep resources are designed to help you excel in your academics with minimal stress.',
      image: 'https://github.com/PraneetDixit/swg-events/blob/master/src/Assets/Images/Career%20Orientation%20Session%20Photos/COS.jpg?raw=true',
    },
    {
      id: 6,
      category: 'academic',
      title: 'PDS Doubt Session',
      description: 'An offline initiative conducted to improve the skills in Programming and Data Structures for first years and get guidance from seniors regarding the grade in PDS and coding skills.',
      image: 'https://github.com/PraneetDixit/swg-events/blob/master/src/Assets/Images/PDS%20Doubt%20Session%20Photos/PDS.jpg?raw=true',
    },
    {
      id: 7,
      category: 'academic',
      title: 'English Language Assessment Test',
      description: 'An offline initiative conducted to improve the English Language, which is useful for various careers.',
      image: 'https://github.com/PraneetDixit/swg-events/blob/master/src/Assets/Images/ELAT%20Photos/ELAT.png?raw=true',
    },
    {
      id: 8,
      category: 'career',
      title: 'Research Guidance Webinar',
      description: 'An online session where panellists give insights about various research opportunities.',
      image: 'https://github.com/PraneetDixit/swg-events/blob/master/src/Assets/Images/Research%20Guidance%20Webinar%20Photos/RGW.jpg?raw=true',
    },
    {
      id: 9,
      category: 'welfare',
      title: 'Campus Tour',
      description: 'An offline event for freshers to show them around the campus and learn stories about important places.',
      image: 'https://github.com/PraneetDixit/swg-events/blob/master/src/Assets/Images/Campus%20Tour%20Photos/CampusTour.png?raw=true',
    },
    {
      id: 10,
      category: 'academic',
      title: 'Study Abroad 101',
      description: 'An offline event where panellists guide about higher education opportunities abroad and how to crack various examinations.',
      image: 'https://raw.githubusercontent.com/PraneetDixit/swg-events/master/src/Assets/Images/Study%20Abroad%20101%20Photos/IMG_1362.HEIC',
    },
  ];

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.category === activeFilter);

  const scrollToEvents = () => {
    document.getElementById('events-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="events-container">
      <section className="hero-section">
        <h1 className="hero-title">
          Explore <span className="hero-highlight">SWG Events</span>
        </h1>
        <p className="hero-subtitle">
          Your gateway to mentorship, career growth, and campus life at IIT Kharagpur.
        </p>
        <div className="scroll-indicator" onClick={scrollToEvents}>
          <p>Scroll to explore</p>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      <section id="events-section" className="events-section">
        <div className="filter-tabs">
          <button 
            className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Events
          </button>
          <button 
            className={`filter-tab ${activeFilter === 'career' ? 'active' : ''}`}
            onClick={() => setActiveFilter('career')}
          >
            Career
          </button>
          <button 
            className={`filter-tab ${activeFilter === 'academic' ? 'active' : ''}`}
            onClick={() => setActiveFilter('academic')}
          >
            Academic
          </button>
          <button 
            className={`filter-tab ${activeFilter === 'welfare' ? 'active' : ''}`}
            onClick={() => setActiveFilter('welfare')}
          >
            Welfare
          </button>
        </div>

        <div className="events-grid">
          {filteredEvents.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-image-wrapper">
                <img src={event.image} alt={event.title} className="event-image" />
              </div>
              <div className="event-content">
                <div className="event-category-badge">{event.category.toUpperCase()}</div>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                {event.link && (
                  <a href={event.link} target="_blank" rel="noopener noreferrer" className="learn-more-link">
                    Learn More →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="app-section">
        <h2 className="app-title">Get the SWG App</h2>
        <p className="app-subtitle">
          Stay connected with all SWG events, resources, and updates right from your phone.
        </p>
        <div className="app-buttons">
          <button className="app-button">
            <span className="apple-icon"></span> App Store
          </button>
          <button className="app-button">
            <span className="play-icon">▶</span> Google Play
          </button>
        </div>
      </section>
    </div>
  );
};

export default Events;