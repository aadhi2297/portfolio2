import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter, FaArrowUp } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-socials">
        <a href="https://github.com/Veeras-code" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/veera-naga-sai-543067266/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://x.com/x" target="_blank" rel="noreferrer" aria-label="X">
          <FaXTwitter />
        </a>
      </div>
      <div className="footer-info">
        <span>© {new Date().getFullYear()} Veera Naga Sai. All rights reserved.</span>
        <span className="footer-divider">|</span>
        <span>
          Built with <a href="https://react.dev/" target="_blank" rel="noreferrer">React</a>
        </span>
        <span className="footer-divider">|</span>
        <a href="#top" className="footer-top" aria-label="Back to top">
          <FaArrowUp /> Top
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;