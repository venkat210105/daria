import { Link } from 'react-router-dom';
import SuccessStories from '../components/SuccessStories';

// Import images correctly
import fullstackImg from '../assets/fullstack.webp';
import cloudImg from '../assets/cloudcomputing.jpeg';
import devopsImg from '../assets/devops.webp';

export default function HomePage() {
  const courses = [
    {
      title: 'Full Stack Development',
      description: 'Learn front-end and back-end tools like React, Node.js, and MongoDB.',
      link: '/courses/fullstack',
      img: fullstackImg,
    },
    {
      title: 'Cloud Computing',
      description: 'Master AWS, Azure, and cloud architecture.',
      link: '/courses/cloud',
      img: cloudImg,
    },
    {
      title: 'DevOps',
      description: 'Gain CI/CD, Docker, Jenkins, and Kubernetes skills.',
      link: '/courses/devops',
      img: devopsImg,
    },
  ];

  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-logo">Institute Name</div>
        <div className="nav-links">
          <Link to="/" className="nav-btn">Home</Link>
          <Link to="/courses" className="nav-btn">Courses</Link>
          <Link to="/about" className="nav-btn">About</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to the Institute</h1>
        <p className="subtitle">Upgrade your career with Full Stack, Cloud & DevOps courses.</p>
        <div className="hero-buttons">
          <Link to="/courses"><button className="hero-btn">Browse Courses</button></Link>
          <Link to="/learn-more"><button className="hero-btn outline">Learn More</button></Link>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-section">
        <h2>Popular Courses</h2>
        <div className="courses-grid">
          {courses.map(course => (
            <div className="course-card" key={course.title}>
              <img src={course.img} alt={course.title} />
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <Link to={course.link}>
                <button className="course-btn">Learn More</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories Section */}
      <SuccessStories />

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Institute Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
