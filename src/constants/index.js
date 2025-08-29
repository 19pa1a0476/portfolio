import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  django,
  python,
  postgres,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  stegano,
  ideator,
  leetconnect,
  gssoc,
  kwiqreply
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "my-work",
    title: "Experience",
  },
  {
    id: "my-projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Developer",
    icon: web,
  },
  {
    title: "AI Developer",
    icon: backend,
  },
  {
    title: "FullStack Developer",
    icon: mobile,
  },
  {
    title: "Team Player",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  }
];

const experiences = [
  {
    title: "Community Expert and Contributor",
    company_name: "GirlScript Summer of Code",
    icon: gssoc,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Secured Rank 42 out of more than 10,000 contributors all over the world by actively contributing to various open-source projects related to React, HTML/CSS, and JavaScript.",
      "Collaborated with diverse teams to develop features, write code, and resolve issues.",
      "Recognized as a GSSoC Community Expert, providing guidance and support to fellow participants."
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "kwiqreply",
    icon: kwiqreply,
    iconBg: "#ffffff",
    date: "June 2023 - Current",
    points: [
      "Developed user management and access control feature allowing organizations to invite, add and remove users.",
      "Implemented Celery for batch and parallel processing, resulting in a remarkable 99.5% reduction in data upload time, significantly enhancing database efficiency and user satisfaction.",
      "Enabled clients to independently obtain WhatsApp template approvals, eliminating the need for manual intervention by the developer team.",
      " Utilized Django, Ajax, JavaScript, AWS, MySQL and the ChatGPT API to implement and enhance features.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Alejandro’s tenacity and focus on understanding and solving the problem makes him a great developer",
    name: "Libier Bermudez",
    designation: "IT Product Director",
    company: "RSM US LLP",
    image: "https://i.imgur.com/IJ7RR1H.png",
  },
];

const projects = [
  {
    name: "IBPL Code Generation Using LangChain",
    description:
      "Developed an AI-powered Streamlit app for O9 Solutions, leveraging Retrieval-Augmented Generation and LangChain for automated IBPL code generation. Built Flask backend with webhook integration, optimized for real-time code generation and user-specific logging using OAuth and MySQL. Achieved 30% faster processing with Qdrant Vector DB.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "LangChain", color: "green-text-gradient" },
      { name: "Flask", color: "pink-text-gradient" },
      { name: "Streamlit", color: "blue-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
    ],
    image: "",
    source_code_link: "",
  },
  {
    name: "Iris Flower Classification",
    description:
      "Created a machine learning classifier to identify iris flower species using Decision Tree algorithm, achieving 96% accuracy. Compared models (XGBoost, Random Forest, Logistic Regression) and implemented preprocessing for improved efficiency. Deployed via Flask API for real-time predictions with visualizations using Matplotlib and Seaborn.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Scikit-learn", color: "pink-text-gradient" },
      { name: "Flask", color: "green-text-gradient" },
      { name: "Pandas", color: "blue-text-gradient" },
    ],
    image: "",
    source_code_link: "",
  },
  {
    name: "Iris Flower Classification",
    description:
      "Created a machine learning classifier to identify iris flower species using Decision Tree algorithm, achieving 96% accuracy. Compared models (XGBoost, Random Forest, Logistic Regression) and implemented preprocessing for improved efficiency. Deployed via Flask API for real-time predictions with visualizations using Matplotlib and Seaborn.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Scikit-learn", color: "pink-text-gradient" },
      { name: "Flask", color: "green-text-gradient" },
      { name: "Pandas", color: "blue-text-gradient" },
    ],
    image: "",
    source_code_link: "",
  }
];

export { services, technologies, experiences, testimonials, projects };
