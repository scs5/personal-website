import React, { useState } from "react"
import "./Projects.css"
import { projectData } from "../data/projectData"
import { motion, AnimatePresence } from "framer-motion"

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
      <motion.div
        layout
        className="project-grid"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div 
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              layout key={project.id} 
              className="project"
            >
              <img src={project.imageSrc} alt={`Project ${project.id}`} />
              <div className="project-name">{project.name}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default Projects;
