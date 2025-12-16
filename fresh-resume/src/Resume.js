import React from 'react';

const Resume = () => {
  return (
    <main className="resume-container">
      <header className="header-section">
        <h1 className="name">SANTHOSH KUMAR N</h1>
        <div className="contact-info">
          <span>📱 +91-8495900723</span>
          <span>✉️ santhoshkumar@gmail.com</span>
          <span>🔗 <a href="https://linkedin.com/in/santhoshkumar" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
          <span>💻 <a href="https://github.com/santhosh12133" target="_blank" rel="noopener noreferrer">GitHub</a></span>
        </div>
      </header>

      <section className="summary-section">
        <h2>Professional Summary</h2>
        <p>
          Motivated Software Engineer eager to contribute to impactful real-world projects and grow in a collaborative environment. 
          Strong in debugging, problem-solving, critical thinking, and teamwork. Focused on building clean, reliable, and scalable solutions.
        </p>
      </section>

      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-group">
            <h3>Frontend</h3>
            <p>HTML, CSS, Bootstrap, React.js, JavaScript (basic)</p>
          </div>
          <div className="skill-group">
            <h3>Backend</h3>
            <p>Node.js, Express.js, RESTful APIs</p>
          </div>
          <div className="skill-group">
            <h3>Databases</h3>
            <p>MySQL, MongoDB, PostgreSQL (basic)</p>
          </div>
          <div className="skill-group">
            <h3>DevOps & Cloud</h3>
            <p>Git, GitHub, Docker, CI/CD fundamentals</p>
          </div>
          <div className="skill-group">
            <h3>Programming & CS</h3>
            <p>Java, Python, OOPS, DSA, SDLC</p>
          </div>
          <div className="skill-group">
            <h3>Tools & Practices</h3>
            <p>Postman, VS Code, Docker CLI, MySQL Workbench, clean code, debugging</p>
          </div>
        </div>
        <div className="soft-skills">
          <strong>Soft Skills:</strong> Problem-solving, communication, teamwork, adaptability
        </div>
      </section>

      <section className="education-section">
        <h2>Education</h2>
        <div className="education-item">
          <div className="education-header">
            <h3>Master of Computer Applications (MCA)</h3>
            <span className="year">Expected 2026</span>
          </div>
          <p className="institution">Nitte Meenakshi Institute of Technology, Bangalore</p>
          <p className="details">CGPA: 7.0 / 10</p>
        </div>
        <div className="education-item">
          <div className="education-header">
            <h3>Bachelor of Computer Applications (BCA)</h3>
            <span className="year">2024</span>
          </div>
          <p className="institution">Sri Bhagavan Mahaveer Jain College, KGF</p>
          <p className="details">CGPA: 8.1 / 10</p>
        </div>
      </section>

      <section className="experience-section">
        <h2>Internship Experience</h2>
        <div className="experience-item">
          <div className="experience-header">
            <h3>Jr. Web Developer Intern</h3>
            <span className="year">May 2024 – June 2024</span>
          </div>
          <p className="company">Rats Technologies</p>
          <p className="tools"><strong>Tools:</strong> Python, MySQL, Bootstrap</p>
          <ul className="achievements">
            <li>Developed web solutions using HTML, CSS, JavaScript, and Bootstrap</li>
            <li>Built backend logic using Python/Django with MySQL</li>
            <li>Worked on domain registration and hosting tasks</li>
            <li>Recognized for quick learning and dedication</li>
          </ul>
        </div>
      </section>

      <section className="projects-section">
        <h2>Projects</h2>
        <div className="project-item">
          <div className="project-header">
            <h3>CivicFix — Crowdsourced Civic Issue Reporting System</h3>
            <span className="year">2025</span>
          </div>
          <ul className="project-details">
            <li>Mobile-first platform for reporting civic issues using geo-tagged photos</li>
            <li>Backend REST APIs for issue lifecycle management</li>
            <li>Automated routing based on location and category</li>
            <li>Admin dashboard with map-based visualization</li>
          </ul>
        </div>
        <div className="project-item">
          <div className="project-header">
            <h3>Learnato — Real-Time Discussion Forum</h3>
            <span className="year">2025</span>
          </div>
          <ul className="project-details">
            <li>Real-time forum using Socket.io</li>
            <li>REST APIs for posts, replies, and search</li>
            <li>Dockerized application</li>
            <li>Microservice-based architecture</li>
          </ul>
        </div>
      </section>

      <section className="certifications-section">
        <h2>Certifications</h2>
        <div className="certifications-list">
          <span className="certification">Machine Learning (Infosys)</span>
          <span className="certification">Java Programming (Simplilearn)</span>
          <span className="certification">Networking Basics (Cisco)</span>
          <span className="certification">Python Pro Bootcamp (Udemy)</span>
          <span className="certification">AWS Fundamentals</span>
          <span className="certification">Artificial Intelligence (IBM)</span>
        </div>
      </section>

      <footer className="footer-section">
        <p>© 2025 Santhosh Kumar N. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Resume;
