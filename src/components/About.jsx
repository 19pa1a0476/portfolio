import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About Me</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Hi, I’m Shyam Chandra Kethu, an innovative Software Developer with 2+ years of experience in Java, Python, and AI/ML. Currently, I work as a Consultant at Genpact, leading the development of AI-powered IDE plugins and orchestration engines used by 50+ developers and adopted by top leadership for client projects. My expertise includes building scalable cloud-based solutions using Azure, AWS, Flask, FastAPI, and LLM technologies like Azure OpenAI and Amazon Bedrock.
        <br /><br />
        My journey includes architecting GenAI API Gateways, developing automation tools that reduce workflow times by 20-25%, and deploying intelligent systems for precise code assessment and recruitment assistance. Recognized with multiple awards, I am passionate about leveraging Generative AI to drive business productivity and enhance user experiences.
        <br /><br />
        Technical Proficiencies: Java, Python, SQL, Flask, LangChain, AWS, Azure, Docker, REST APIs, MySQL, PostgreSQL, Agile methodologies, and more.
        <br /><br />
        Let’s collaborate and transform ideas into high-impact, AI-driven digital solutions!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
