import React from "react";
import { ExternalLink } from "lucide-react";
import "./Projects.css";
import kisaanmart from "../assets/kisaanmart.png";
import guessTheMovieName from "../assets/guess1.png";

const projects = [
  {
    title: "Kisaan-Mart",
    desc: "Built a Full-Stack web application that enables farmers to directly list and sell their agricultural products to consumers through online, eliminating middlemen and increasing profitability. Integrated secure user authentication, real-time product listings, and responsive UI to provide a seamless marketplace experience.",
    link: "https://kisaan-mart-gilt.vercel.app/",
    github: "https://github.com/Veeras-code/Kisan-Mart",
    image: kisaanmart,
    tags: ["React", "MongoDB", "Node.js", "Authentication","taiwind"],
  },
  {
    title: "DocSync — Smart PDF Comparison",
    desc: "DocSync enables direct comparison of PDF documents using AI-powered cosine similarity techniques. It supports multiple scan modes—document-level and sentence-level—and offers fine-grained insights through preprocessed embeddings.",
    link: "https://docsync-prototype.streamlit.app/",
    github: "https://github.com/Veeras-code/DocSync",
    image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=800&q=80",
    tags: ["Streamlit", "PDF", "Embeddings", "FastAPI", ],
  },
  {
    title: "Guess the Movie Name Game",
    desc: "An interactive, single-page web game where players guess the name of a random Telugu or Indian movie within limited chances. The game features dynamic word-length logic, hint systems, celebratory win/lose banners, and smooth UI transitions — all optimized with React, CSS,",
    link:"https://guess-the-movie-name-h7d5.vercel.app/",
    github: "https://github.com/Veeras-code/Guess-The-Movie-Name-",
    image: guessTheMovieName,
    tags: [ "React", "CSS", "react-hot-toast", "react-router-dom"],
  },
 
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <h3 className="projects-title">Projects</h3>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.title} className="project-image" />
          <h4 className="project-name">{project.title}</h4>
          <p className="project-desc">{project.desc}</p>
          <div className="project-tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>
          {project.link && (
          <a href={project.link} target="_blank"
            rel="noreferrer" className="project-link">
            View Live <ExternalLink className="external-link-icon" />
          </a>
        )}

          <a href={project.github} target="_blank" rel="noreferrer" className="project-github">
            GitHub Repo
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;