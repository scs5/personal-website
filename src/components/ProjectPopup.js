import React from "react";
import { motion } from "framer-motion";
import "./ProjectPopup.css"

function ProjectPopup({ project, onClose }) {
  return (
    <motion.div
      className="popup-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="popup"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        {project.technologies && (
          <p>
            <strong>Technologies:</strong> {project.technologies.join(", ")}
          </p>
        )}
        <p>
          <strong>Link:</strong>{" "}
          <a href={project.link}>{project.link}</a>
        </p>
      </motion.div>
    </motion.div>
  );
}

export default ProjectPopup;
