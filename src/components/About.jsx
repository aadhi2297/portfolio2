import React, { useRef, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "./About.css";

const About = () => {
  const [photo, setPhoto] = useState(null);
  const fileInputRef = useRef();

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setPhoto(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="about" className="about-section">
      <div
        className="about-avatar-glow"
        onClick={() => fileInputRef.current.click()}
        title="Click to upload photo"
      >
        {photo ? (
          <img
            src={photo}
            alt="Profile"
            className="about-avatar"
          />
        ) : (
          <Player
            autoplay
            loop
            src="https://assets10.lottiefiles.com/packages/lf20_4kx2q32n.json"
            style={{ height: "140px", width: "140px" }}
          />
        )}
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handlePhotoChange}
        />
      </div>
      <div className="about-card">
        <h2 className="about-title">Hi, I'm Veera Naga Sai</h2>
        <p className="about-subtitle">
          Web Developer | AIML Enthusiast  | Problem Solver
        </p>
        <p className="about-desc">
          I’m a passionate developer who loves building responsive, scalable, and creative web applications.<br /><br />
          I thrive on solving real-world problems with technology and enjoy working with modern stacks like React, Node.js, and databases. My curiosity drives me to keep learning new tools and frameworks.<br /><br />
          I care about clean code, great UI/UX, and performance. When I’m not coding, I’m exploring new tech trends, contributing to open source, or brainstorming my next project.<br /><br />
          Let’s connect and build something amazing together!
        </p>
      </div>
    </section>
  );
};

export default About;