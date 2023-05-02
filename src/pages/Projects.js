import React, { useState } from "react"
import "./Projects.css"
import { projectData } from "../data/projectData"

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Data Viz", "Deep Learning", "Computer Vision"];
  const filteredProjects = activeFilter === "All" ? projectData : projectData.filter(project => project.categories.includes(activeFilter));

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };
  
  return (
    <section id="projects">
      <div className="filter-bar-container">
        <div className="filter-bar">
          {filters.map((filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? "active" : ""}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="filter-bar-shadow" />
      <div className="project-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project">
            <img src={project.imageSrc} alt={`Project ${project.id}`} />
            <div className="project-name">{project.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;
