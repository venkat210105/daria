import { Link } from 'react-router-dom';
import SuccessStories from '../components/SuccessStories';

export default function HomePage() {
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
          {[ 
            {
              title: 'Full Stack Development',
              description: 'Learn front-end and back-end tools like React, Node.js, and MongoDB.',
              link: '/courses/fullstack',
              img: 'https://th.bing.com/th/id/OIP.6vZ8e3ZOlDajb_6noR6APAHaGR?w=590&h=500&rs=1&pid=ImgDetMain'
            },
            {
              title: 'Cloud Computing',
              description: 'Master AWS, Azure, and cloud architecture.',
              link: '/courses/cloud',
              img: 'https://www.ingenious.co.uk/wp-content/uploads/2023/08/What-is-Cloud-Computing.jpeg'
            },
            {
              title: 'DevOps',
              description: 'Gain CI/CD, Docker, Jenkins, and Kubernetes skills.',
              link: '/courses/devops',
              img: 'https://imageio.forbes.com/specials-images/imageserve/60f1e792c7e89f933811814c/0x0.jpg?format=jpg&width=1200'
            },
          ].map(course => (
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
