import React from "react";
function Skills() {
  return (
    <div className="page">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuFAoHUEQ7PBsW9cQCtqWbgcuJaYyCUk47_Q&s" alt="HTML" className="skill-logo" />
          <p>HTML</p>
        </div>
        <div className="skill-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXbQfZoJIxJn32bvV7er5W827XuCR5mfsYw&s" alt="CSS" className="skill-logo" />
          <p>CSS</p>
        </div>
        <div className="skill-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ4qe-TiNdb7kONl0a1C3a1R3H9TPWKSJeGg&s" alt="JavaScript" className="skill-logo" />
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <img src="https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=1920%2C1920&ssl=1" alt="Python" className="skill-logo" />
          <p>Python</p>
        </div>
        <div className="skill-item">
          <img src="https://education.oracle.com/file/general/p-80-java.png" alt="Java" className="skill-logo" />
          <p>Java</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
