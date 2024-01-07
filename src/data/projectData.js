export const projectData = [
  {
    id: 1,
    name: "Portfolio Website",
    imageSrc: require("../assets/website-logo.webp"),
    popupSrc: require("../assets/website-banner.webp"),
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
    popupSrc: require("../assets/indeed-scraper-banner.webp"),
    links: [
      { name: "GitHub", url: "https://github.com/scs5/indeed-scraper" }
    ],
    technologies: ["Python", "APIs", "Selenium"],
    categories: ["Misc"],
    description: "Have you ever wondered which skills are in demand in the job market? Are you looking to enhance your skill set for a specific career path? Look no further! This project is all about automating the process of extracting skills from job listings on Indeed, categorizing them, and diving deep into data analysis to uncover valuable insights. See my repository below for more details."
  },
  {
    id: 3,
    name: "Wolfpack Parking Database",
    imageSrc: require("../assets/wolfpack-database-logo.webp"),
    popupSrc: require("../assets/wolfpack-database-banner.webp"),
    links: [
      { name: "GitHub", url: "https://github.com/scs5/ncsu-parking-db" }
    ],
    technologies: ["SQL", "Python"],
    categories: ["Data Science"],
    description: "In collaboration with a team of graduate students during a DBMS course, I created a database modeling NC State's parking system. Our project includes a straightforward user interface enabling users to perform various operations that, behind the scenes, run SQL queries via SQLite to manage the data effectively."
  },
  {
    id: 4,
    name: "Sign Language Detection",
    imageSrc: require("../assets/asl-detection-logo.webp"),
    popupSrc: require("../assets/asl-detection-banner.webp"),
    links: [
      { name: "GitHub", url: "https://github.com/scs5/sign-language-detection" }
    ],
    technologies: ["Scikit-learn", "OpenCV", "Python"],
    categories: ["Data Science"],
    description: "This project aims to create a real-time sign language detection system using a custom dataset of hand signs. This involves capturing multiple images of different hand signs, extracting hand landmarks for feature representation, and training a classification model to predict the sign. The trained model is then deployed for real-time sign language detection."
  },
  {
    id: 5,
    name: "Cirrhosis Outcome Prediction",
    imageSrc: require("../assets/cirrhosis-prediction-logo.webp"),
    popupSrc: require("../assets/cirrhosis-prediction-banner.webp"),
    links: [
      { name: "GitHub", url: "https://github.com/scs5/cirrhosis-prediction" }
    ],
    technologies: ["Scikit-learn", "Optuna", "Python"],
    categories: ["Data Science"],
    description: "This was my first Kaggle competition where the task was to predict the outcomes of cirrhosis patients. I placed in the top 15% by creating a simple classification pipeline using XGBoost, Optuna hyperparameter tuning, and experimenting with autoencoders."
  },
];