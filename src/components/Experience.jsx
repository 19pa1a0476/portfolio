import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import G from "../assets/G.png";
import study_owl from "../assets/study_owl.png";

// Experience data extracted from your resume
const experiences = [
  {
  "title": "Consultant",
  "company_name": "Genpact",
  "icon": G,
  "iconBg": "#ffffff",
  "date": "Jul 2023 – Present",
  "points": [
    "Spearheaded the development of enterprise-grade Generative AI solutions, architecting a core AI Orchestration Engine (Azure OpenAI, Bedrock) powering 20+ applications.",
    "Built and deployed a suite of AI developer tools, including IDE plugins and a GitHub agent that automated PR reviews, boosting developer efficiency by over 15%.",
    "Pioneered novel AI agents like an 'LLM-as-a-Judge' for automated code evaluation and a documentation generator that reduced creation time by 25%.",
    "Drove adoption of GenAI solutions across 50+ developers and senior leadership, leading to 5+ successful client implementations.",
    "Recognized with Genpact's highest honor, the 'Platinum Award', and the 'Titans@TechServices' title for transformative impact and leadership."
  ]
},
  {
    title: "Full Stack Developer Intern",
    company_name: "Study Owl Private Limited",
    icon: study_owl, // keep empty or provide image as needed
    iconBg: "#ffffff",
    date: "Jan 2023 – Jun 2023",
    "points": [
    "Engineered a full-stack, responsive web application using React.js for the front-end and Java for robust backend data processing.",
    "Collaborated with designers to optimize site performance and UI/UX, successfully reducing page load times by 30%."
],
  }
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          {experience.icon && (
            <img
              src={experience.icon}
              alt={experience.company_name}
              className='w-[60%] h-[60%] object-contain'
            />
          )}
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div id="my-work" variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
