import courses from '../data/courses'; // Static course data
import { Link } from 'react-router-dom';

export default function CourseCatalog() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-logo">Institute Name</div>
        <div className="nav-links">
          <Link to="/" className="nav-btn">Home</Link>
          <Link to="/courses" className="nav-btn">Courses</Link>
          <Link to="/about" className="nav-btn">About</Link>
        </div>
      </nav>

      <div className="course-catalog-page">
        {/* Courses Section */}
      <section className="courses-section">
        <h2>Popular Courses</h2>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div
              className={`course-card ${index % 2 === 0 ? 'left-content' : 'right-content'}`}
              key={course.id}
            >
              <div className="course-details">
                <h3>{course.title}</h3>
                <p><strong>Instructor:</strong> {course.instructor}</p>
                <p><strong>Duration:</strong> {course.duration}</p>
                <p>{course.description}</p>
                <Link to={course.link || '#'}>
                  <button className="course-btn">Learn More</button>
                </Link>
              </div>
              <div className="course-image">
                <img src={course.image} alt={course.title} />
              </div>
            </div>
          ))}
        </div>

      </section>
      </div>
    </div>
  );
}
