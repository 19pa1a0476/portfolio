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

// Experience data extracted from your resume
const experiences = [
  {
    title: "Consultant",
    company_name: "Genpact",
    icon: "", // keep empty or provide image as needed
    iconBg: "#ffffff",
    date: "Jul 2023 – Present",
    points: [
      "Led the development of innovative Generative AI use cases within the Gen-AI Industrialization team using Agile methodologies.",
      "Developed a Flask-based AI Orchestration Engine integrating Azure OpenAI & Amazon Bedrock, powering 20+ AI use cases.",
      "Built a GEN-AI API Gateway with modular architecture, robust logging (MySQL, OAuth), and deployed Llama LLMs on Azure VM using Fast API.",
      "Architected Generative AI IDE plugins for IntelliJ IDEA, enabling code generation, SQL optimization, batch test-data creation, and integrated chat-assist.",
      "Developed a GitHub AI plugin for automated PR reviews, boosting efficiency by 15-20%.",
      "Created a Code Progress Tracker Agent POC reducing documentation creation time by 20-25%.",
      "Built a GenAI-based Recruitment Assister API with LangChain for interviewer support.",
      "Engineered an LLM-as-a-Judge system for precise code assessment.",
      "GenAI solutions adopted by 50+ developers and top leadership, with 5+ successful client implementations.",
      "Achievements: Awarded the ‘Titans@TechServices’ recognition and Genpact’s prestigious ‘Platinum Award’ for exceptional leadership and transformative impact."
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Study Owl Private Limited",
    icon: "", // keep empty or provide image as needed
    iconBg: "#ffffff",
    date: "Jan 2023 – Jun 2023",
    points: [
      "Developed a responsive website using React.js, HTML, and CSS, ensuring seamless cross-device compatibility.",
      "Implemented backend functionalities in Java, improving data handling and user interaction efficiency.",
      "Optimized site performance & aesthetics in collaboration with designers, reducing page load time by 30%."
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
