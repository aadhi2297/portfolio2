import React from "react";
import "./Navbar.css";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <span className="navbar-logo anime-logo">Veera Naga Sai</span>
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li key={item.label}>
            <a className="navbar-card" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <a
            className="navbar-card"
            href="/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <span role="img" aria-label="Resume">📄</span> Resume
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;