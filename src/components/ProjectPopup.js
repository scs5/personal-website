import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./ProjectPopup.css";

function ProjectPopup({ project, onClose }) {
  const popupRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef, onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      className="popup-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="popup"
        ref={popupRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <button className="close-button" onClick={onClose}>
          <i class="fa fa-times-circle-o" aria-hidden="true"></i>
        </button>
        <h2 className="project-title">{project.name}</h2>
        <img className="popup-image" src={project.popupSrc} alt={project.name} />
        {project.technologies && (
          <p className="project-technologies">
            <strong>Technologies:</strong> {project.technologies.join(", ")}
          </p>
        )}
        <p className="project-description">
          {project.description}
        </p>
        <p className="project-link">
          <strong>Github:</strong>{" "}
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">{project.githubLink}</a>
        </p>
        <p className="demo-link">
          <strong>Live Demo:</strong>{" "}
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">{project.demoLink}</a>
        </p>
      </motion.div>
    </motion.div>
  );
}

export default ProjectPopup;
