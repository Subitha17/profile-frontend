import React from "react";
function Skills() {
  return (
    <div className="page">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-item">
          <img src="src\assets\html.png" alt="HTML" className="skill-logo" />
          <p>HTML</p>
        </div>
        <div className="skill-item">
          <img src="src\assets\css.png" alt="CSS" className="skill-logo" />
          <p>CSS</p>
        </div>
        <div className="skill-item">
          <img src="src\assets\javascript.png" alt="JavaScript" className="skill-logo" />
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <img src="src\assets\python.jpeg" alt="Python" className="skill-logo" />
          <p>Python</p>
        </div>
        <div className="skill-item">
          <img src="src\assets\java.png" alt="Java" className="skill-logo" />
          <p>Java</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
