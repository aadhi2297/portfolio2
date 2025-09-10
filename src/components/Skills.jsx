import React from "react";
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase, FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs, SiRedux, SiMongodb, SiExpress, SiSocketdotio, SiFramer,
  SiMysql, SiPostgresql, SiSqlite, SiFirebase
} from "react-icons/si";
import "./Skills.css";

import { FaPython, FaJava} from "react-icons/fa";

const Languages = [
  { name: "Python", icon: <FaPython color="#3776AB" />, percent: 85 },
  { name: "Java", icon: <FaJava color="#007396" />, percent: 75 },
  { name: "SQL", icon: <SiMysql color="#4479A1" />, percent: 85 },
  { name: "JavaScript", icon: <FaJs color="#f7df1e" />, percent: 60 },
];


const WebDeveloper = [
  { name: "React", icon: <FaReact color="#61dafb" />, percent: 80 },
  { name: "HTML5", icon: <FaHtml5 color="#e34c26" />, percent: 90 },
  { name: "CSS3", icon: <FaCss3Alt color="#1572b6" />, percent: 80 }, 
   { name: "Node.js", icon: <FaNodeJs color="#8cc84b" />, percent: 80 },
  { name: "Express.js", icon: <SiExpress color="#fff" />, percent: 80 },
  { name: "Streamlit", icon: <SiStreamlit color="#f54d23ff" />, percent: 80 },
];
import {
  SiScikitlearn,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiPython,
  SiStreamlit,
} from "react-icons/si";

const mlSkills = [
  {
    name: "Pandas",icon: <SiPandas color="#150458" />,percent: 90, // Data preprocessing & manipulation
  },
  {
    name: "NumPy",icon: <SiNumpy color="#013243" />,percent: 85, // Mathematical foundations
  },
  {
    name: "Scikit-learn",icon: <SiScikitlearn color="#f7931e" />,percent: 85, // Core ML algorithms
  },
  {
    name: "TensorFlow",icon: <SiTensorflow color="#ff6f00" />,percent: 75, // Deep learning modeling
  },
  
  {
    name: "Plotly",icon: <SiPlotly color="#3f4f75" />,percent: 80, // Interactive charts
  },
  {
    name: "Seaborn",icon: <SiPython color="#5f9ea0" />,percent: 75, // Statistical visualization
  },
 
];;

const database = [
  { name: "MongoDB", icon: <SiMongodb color="#4db33d" />, percent: 75 },
  { name: "MySQL", icon: <SiMysql color="#00758f" />, percent: 70 },
  { name: "Firebase", icon: <SiFirebase color="#ffcb2b" />, percent: 60 },
   { name: "Github", icon: <FaGithub color="#ffcb2b" />, percent: 85 },
];

const SkillCard = ({ title, skills }) => (
  <div className="skill-card">
    <div className="skill-title">{title}</div>
    {skills.map((tool, idx) => (
      <div className="skill-row" key={idx}>
        <span className="skill-icon">{tool.icon}</span>
        <span className="skill-name">{tool.name}</span>
        <span className="skill-percent">{tool.percent}%</span>
        <div className="skill-bar-bg">
          <div className="skill-bar-fg" style={{ width: `${tool.percent}%` }} />
        </div>
      </div>
    ))}
  </div>
);

const Skills = () => (
  <section id="skills" className="skills-section">
    <h3 className="skills-title">My Skills & Tools</h3>
    <div className="skills-list">
      <SkillCard title="Languages" skills={Languages} />
      <SkillCard title="Web Developing Tools" skills={WebDeveloper} />
      <SkillCard title="ML/Data Science" skills={mlSkills} />

      <SkillCard title="Database & Other" skills={database} />

    </div>
  </section>
);

export default Skills;