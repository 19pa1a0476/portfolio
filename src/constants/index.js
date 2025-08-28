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
    title: "React Developer",
    icon: web,
  },
  {
    title: "Django Developer",
    icon: backend,
  },
  {
    title: "FullStack Developer",
    icon: mobile,
  },
  {
    title: "Project Lead",
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
    name: "React JS",
    icon: reactjs,
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
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
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
    name: "SteganoHide",
    description:
      "SteganoHide is an innovative steganography website allowing users to securely embed and retrieve encrypted text within images. The platform encrypts user-provided text with a password, concealing it within the image. Offering multiple encryption algorithms, tampering detection, and privacy measures. It serves as a user-friendly and versatile tool for secure communication and data storage.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
      {
        name: "Steganography",
        color: "green-text-gradient",
      },
    ],
    image: stegano,
    source_code_link: "https://github.com/Shyamchoudhary11/SteganoHide",
  },
  {
    name: "Ideator",
    description:
      "Ideator is a web-based platform designed to enhance your ideas by providing personalized project suggestions aligned with your skills and interests: offering an idea generation process, and delivering tailored and innovative concepts. The platform emphasizes data security with strong authentication features and boasts a visually appealing and user-friendly interface.",
    tags: [
      {
        name: "OpenAI API",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "blue-text-gradient",
      },

    ],
    image: ideator,
    source_code_link: "https://github.com/Shyamchoudhary11/Ideator",
  },
  {
    name: "LeetConnect",
    description:
      "LeetConnect is a browser extension that enhances the LeetCode platform by allowing users to follow others, access solutions, and seamlessly integrate a search box. The implementation involves React components for user interactions, while DRF ensures a robust backend for user management and data retrieval.",
    tags: [
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "Google Chrome API",
        color: "green-text-gradient",
      },
      {
        name: "DjangoRestFramework",
        color: "pink-text-gradient",
      },
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Browser Extension",
        color: "pink-text-gradient",
      },
    ],
    image: leetconnect,
    source_code_link: "https://github.com/Shyamchoudhary11/leetconnect",
  },
];

export { services, technologies, experiences, testimonials, projects };
