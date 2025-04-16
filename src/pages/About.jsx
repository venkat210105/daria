import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/About.css';
export default function About() {
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
    
    <div className="about-container">
      <section className="about-hero">
        <h1>About Me</h1>
        <p>
          Hey there! I'm Venkat, a passionate full stack developer with hands-on experience in building modern,
          responsive, and dynamic web applications. I specialize in React.js, Node.js, Django, and cloud technologies,
          and I love turning ideas into scalable digital solutions.
        </p>
      </section>

      <section className="about-experience">
        <h2>My Journey</h2>
        <p>
          I started my developer journey with an internship at RINL (Visakhapatnam Steel Plant), where I built a fully
          functional hotel booking website using Java, Servlets, and front-end tech like HTML, CSS, and JavaScript.
          Since then, I've expanded my skill set to include MERN stack development, Django, AWS services, Docker,
          and even Generative AI integrations for smart applications.
        </p>
      </section>

      <section className="about-projects">
        <h2>What I Do</h2>
        <ul>
          <li>🌐 Build responsive frontends with React.js</li>
          <li>🔧 Create robust backends using Node.js, Express, and Django</li>
          <li>☁️ Deploy scalable apps on AWS and Render</li>
          <li>🤖 Integrate AI/ML models for smart feature sets</li>
          <li>📸 Work on creative use cases like extracting product data from social media content</li>
        </ul>
      </section>

      <section className="about-goal">
        <h2>Let’s Build Together</h2>
        <p>
          Whether you're looking for a modern website, a data-driven dashboard, or an end-to-end AI-powered
          solution — I’m here to help you bring your vision to life. Reach out and let’s collaborate!
        </p>
      </section>

      <section className="about-contact">
  <h2>📫 Get in Touch</h2>
  <p>
    Feel free to connect with me for collaborations, freelance projects, or tech talks!
    <br />
    <strong>Email:</strong> <a href="mailto:venkatmariserla21@gmail.com">venkatmariserla21@gmail.com</a>
    <br />
    <strong>GitHub:</strong> <a href="https://github.com/venkat210105" target="_blank" rel="noopener noreferrer">github.com/venkat210105</a>
  </p>
</section>

    </div>
    </div>
  );
}
