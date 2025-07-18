import React from "react";

function Projects() {
  return (
    <div className="page">
      <h2>Projects</h2>

      <h3>Contact Form</h3>
      <p>
        Created and deployed a MERN-based Contact Form capturing user details (name, email, phone, address) with backend data storage using MongoDB.
      </p>
      <h3>Event Management</h3>
      <p>
        Created and deployed a full-featured Event Management platform using MERN stack with live event listings and MongoDB data storage.
      </p>
      <h3>Number Plate Detection</h3>
      <p>
        A Python project using OpenCV to detect and highlight vehicle number plates from images/videos.
      </p>

      <h3>Emotion Detection</h3>
      <p>
        Identifies facial expressions in real-time using computer vision and a trained ML model.
      </p>

      <h3>Gradio Brain Tumor Detection</h3>
      <p>
        Web app developed with Python and Gradio that detects brain tumors in MRI images using deep learning.
      </p><br></br>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/subitha-s-9563572a1"
          target="_blank"
          rel="noreferrer"
        >
          Linked In
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a href="https://github.com/Subitha17" target="_blank" rel="noreferrer">
          Github
        </a>
      </p>
    </div>
  );
}

export default Projects;
