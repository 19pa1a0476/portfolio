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
  kwiqreply,
  dora,
  o9_solution,
  crew_ai,
  langchain,
  langflow,
  java,
  vectordb,
  aws,
  azure,
  jenkins,
  kubernetes,
  linux,
  kafka,
  streamlit
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
    title: "AI Engineer",
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
  {name: "LangChain", icon: langchain},
  {
    name: "LangFlow", icon: langflow,
  },
  {name: "Java", icon: java},
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {name: "AWS", icon: aws},
  {name: "Azure", icon: azure},
  {name: "Jenkins", icon: jenkins},
  {name: "Kubernetes", icon: kubernetes},
  {name: "Linux", icon: linux},
  {name: "Docker", icon: docker},
  {name: "Kafka", icon: kafka},
  {name: "Streamlit", icon: streamlit},
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
    name: "DORA - AI Chatbot",
    description:
      "Developed DORA, an AI-powered chatbot for enterprises using LangChain and Flask. Integrated with Azure OpenAI for advanced NLP capabilities and implemented webhook support for real-time interactions. Utilized OAuth for secure user authentication and MySQL for logging user interactions. Deployed on Azure, ensuring scalability and reliability.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "LangChain", color: "green-text-gradient" },
      { name: "Flask", color: "pink-text-gradient" },
      { name: "Streamlit", color: "blue-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
    ],
    image: dora,
    source_code_link: "https://github.com/19pa1a0476/enterprise-ai-chatbot-backend",
  },
  {
    name: "CrewAI Agent",
    description:
      "Created CrewAI, an AI assistant that integrates with IDEs to enhance developer productivity. Utilized LangChain for natural language processing and built a Flask backend with webhook support for real-time code generation. Implemented OAuth for secure user authentication and MySQL for logging user interactions. Deployed the application on AWS, ensuring scalability and reliability.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Scikit-learn", color: "pink-text-gradient" },
      { name: "Flask", color: "green-text-gradient" },
      { name: "Pandas", color: "blue-text-gradient" },
    ],
    image: crew_ai,
    source_code_link: "https://github.com/19pa1a0476/Crew_AI",
  },
  {
    name: "IBPL Code Generator",
    description:
      "Developed an AI-powered Streamlit app for O9 Solutions, leveraging Retrieval-Augmented Generation and LangChain for automated IBPL code generation. Built Flask backend with webhook integration, optimized for real-time code generation and user-specific logging using OAuth and MySQL. Achieved 30% faster processing with Qdrant Vector DB.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Scikit-learn", color: "pink-text-gradient" },
      { name: "Flask", color: "green-text-gradient" },
      { name: "Pandas", color: "blue-text-gradient" },
    ],
    image: o9_solution,
    source_code_link: "https://github.com/19pa1a0476/IBPL_Code_Generator",
  }
];

export { services, technologies, experiences, testimonials, projects };
