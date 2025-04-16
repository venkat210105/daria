import { useEffect, useRef } from 'react';

const successStories = [
  {
    id: 1,
    name: "Aditi Rao",
    story: "Completed Full Stack Development and is now working at Infosys.",
    image: "https://source.unsplash.com/100x100/?woman,face",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    story: "Landed a DevOps Engineer role at TCS after our course.",
    image: "https://source.unsplash.com/100x100/?man,face",
  },
  {
    id: 3,
    name: "Sneha Verma",
    story: "Transitioned to Cloud Computing with hands-on AWS projects.",
    image: "https://source.unsplash.com/100x100/?girl,face",
  },
  {
    id: 4,
    name: "Karthik Iyer",
    story: "Cracked interviews after completing our React & Node bootcamp.",
    image: "https://source.unsplash.com/100x100/?boy,face",
  },
  {
    id: 5,
    name: "Karthik Iyer",
    story: "Cracked interviews after completing our React & Node bootcamp.",
    image: "https://source.unsplash.com/100x100/?boy,face",
  },
  {
    id: 6,
    name: "Karthik Iyer",
    story: "Cracked interviews after completing our React & Node bootcamp.",
    image: "https://source.unsplash.com/100x100/?boy,face",
  },
  {
    id: 7,
    name: "Karthik Iyer",
    story: "Cracked interviews after completing our React & Node bootcamp.",
    image: "https://source.unsplash.com/100x100/?boy,face",
  },
  // Add more stories if needed...
];

export default function SuccessStories() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    const scrollStep = 1; // pixels per tick
    const delay = 20; // milliseconds between ticks

    let scrollInterval = setInterval(() => {
      if (container) {
        // If reached end, scroll back to start
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += scrollStep;
        }
      }
    }, delay);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="success-stories-container">
      <h2 className="heading">Success Stories</h2>
      <div ref={scrollRef} className="scrolling-container">
        <div className="story-cards">
          {successStories.map(({ id, name, story, image }) => (
            <div key={id} className="story-card">
              <img src={image} alt={name} className="profile-image" />
              <h3 className="name">{name}</h3>
              <p className="story">{story}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
