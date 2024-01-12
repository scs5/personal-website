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
    categories: ["Analytics"],
    description: "Have you ever wondered which skills are in demand in the job market? Are you looking to enhance your skill set for a specific career path? Look no further! This project is all about automating the process of extracting skills from job listings on Indeed, categorizing them, and diving deep into data analysis to uncover valuable insights. See my repository below for more details."
  },
  {
    id: 3,
    name: "Learn Data Science",
    imageSrc: require("../assets/ds-notebooks-logo.webp"),
    popupSrc: require("../assets/ds-notebooks-banner.webp"),
    links: [
      { name: "GitHub", url: "https://github.com/scs5/data-science-notebooks" }
    ],
    technologies: ["Scikit-learn", "Tensorflow", "Python"],
    categories: ["Analytics", "Machine Learning"],
    description: "This project contains several educational Jupyter notebooks on a range of data science and machine learning topics. This has been a great way to refresh my own skills in a way that helps others."
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
    categories: ["Machine Learning"],
    description: "This project aims to create a real-time sign language detection system using a custom dataset of hand signs. This involves capturing multiple images of different hand signs, extracting hand landmarks for feature representation, and training a classification model to predict the sign. The trained model is then deployed for real-time sign language detection."
  },
  {
    id: 5,
    name: "Twitter Bot Detection",
    imageSrc: require("../assets/twitter-bot-logo.webp"),
    popupSrc: require("../assets/twitter-bot-banner.webp"),
    links: [
      { name: "GitHub", url: "https://github.com/scs5/twitter-bot-detection" }
    ],
    technologies: ["Scikit-learn", "NLTK", "Python"],
    categories: ["Machine Learning"],
    description: "In this project, I developed a Twitter bot detection system. The process involved cleaning the dataset, creating new textual features, and applying a prediction model. The model achieved an accuracy of approximately 90%."
  },
  {
    id: 6,
    name: "Spotify Shuffle Analysis",
    imageSrc: require("../assets/spotify-logo.webp"),
    popupSrc: require("../assets/spotify-banner.webp"),
    links: [
      { name: "GitHub", url: "https://github.com/scs5/spotify-shuffle-analysis" }
    ],
    technologies: ["Spotify API", "Python"],
    categories: ["Analytics"],
    description: "In this project, I take a look at Spotify's shuffle modes to see if they're truly random or not. In particular, I utilize their API to automatically collect data and then visualize patterns and perform rigourous hypothesis testing."
  },
  {
    id: 7,
    name: "Text Analytics",
    imageSrc: require("../assets/text-analytics-logo.png"),
    popupSrc: require("../assets/text-analytics-banner.webp"),
    links: [
      { name: "GitHub", url: "https://github.com/scs5/text-analytics" }
    ],
    technologies: ["Scikit-learn", "Python"],
    categories: ["Analytics"],
    description: "In this project, I exported and cleaned up personal text message data. I dug into the data, pulled out some cool insights, and made some cool visualizations."
  },
  {
    id: 8,
    name: "Wolfpack Parking Database",
    imageSrc: require("../assets/wolfpack-database-logo.webp"),
    popupSrc: require("../assets/wolfpack-database-banner.webp"),
    links: [
      { name: "GitHub", url: "https://github.com/scs5/ncsu-parking-db" }
    ],
    technologies: ["SQL", "Python"],
    categories: ["Analytics"],
    description: "In collaboration with a team of graduate students during a DBMS course, I created a database modeling NC State's parking system. Our project includes a straightforward user interface enabling users to perform various operations that, behind the scenes, run SQL queries via SQLite to manage the data effectively."
  },
  {
    id: 9,
    name: "Cirrhosis Outcome Prediction",
    imageSrc: require("../assets/cirrhosis-prediction-logo.webp"),
    popupSrc: require("../assets/cirrhosis-prediction-banner.webp"),
    links: [
      { name: "GitHub", url: "https://github.com/scs5/cirrhosis-prediction" }
    ],
    technologies: ["Scikit-learn", "Python"],
    categories: ["Machine Learning"],
    description: "This was my first Kaggle competition where the task was to predict the outcomes of cirrhosis patients. I placed in the top 15% by creating a simple classification pipeline using XGBoost, Optuna hyperparameter tuning, and experimenting with autoencoders."
  },
];