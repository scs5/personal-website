export const projectData = [
  {
    id: 1,
    name: "Portfolio Website",
    imageSrc: require("../assets/website-project-img.webp"),
    popupSrc: require("../assets/website-header.webp"),
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    categories: ["Misc"],
    description: "This website right here! Instead of using a standard drag-and-drop website builder, I decided it would be more interesting and allow more customization if I were to code it up myself from scratch. I'm still very new to frontend development, but this has been a pretty fun experience and I've learned a lot.",
    links: [
      { name: "GitHub", url: "https://github.com/scs5/personal-website" }
    ]
  },
  {
    id: 2,
    name: "Job Market Skills Analysis",
    imageSrc: require("../assets/indeed-scraper-logo.webp"),
    githubLink: "https://github.com/scs5/indeed-scraper",
    technologies: ["Python", "APIs", "Selenium"],
    categories: ["Misc"],
    description: "Have you ever wondered which skills are in demand in the job market? Are you looking to enhance your skill set for a specific career path? Look no further! This project is all about automating the process of extracting skills from job listings on Indeed, categorizing them, and diving deep into data analysis to uncover valuable insights. See my repository below for more details."
  },
];