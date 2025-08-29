import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import myphoto from "../assets/profile.jpg";

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
      <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-8">
        <div className="flex-1">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            I'm Kailash, a passionate Software Engineer specializing in translating complex challenges into elegant digital solutions. With a focus on problem-solving, I combine my object-oriented expertise with a deep curiosity for innovative technologies. As a senior Computer Science student, I've honed my skills in Django, React, Python, JavaScript, Git/GitHub, and PostgreSQL. My commitment to enhancing user experiences drives me to craft intuitive and efficient software solutions. Currently interning at KwiqReply, I contribute to dynamic web application development and collaborate seamlessly within a talented team. Let's connect and turn ideas into reality.
          </motion.p>
        </div>
          <motion.div
            variants={fadeIn("left", "spring", 0.5, 0.75)}
            className="flex-1 flex justify-end items-center w-full h-full pr-8"
          >
            <img
              src={myphoto}
              alt="Kailash"
              className="w-64 h-64 rounded-2xl object-cover border-4 border-[#915EFF] shadow-2xl"
            />
          </motion.div>
        </div>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
