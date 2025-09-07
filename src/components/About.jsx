import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import myphoto from "../assets/myprofile.png";

const ServiceCard = ({ index, title, icon, description, backIcon }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="relative w-full h-[280px] cursor-pointer"
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        <div
          className={`absolute inset-0 transition-transform duration-500 [transform-style:preserve-3d] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Front Side */}
          <div className="absolute inset-0 bg-tertiary rounded-[20px] shadow-card flex flex-col justify-center items-center p-6 [backface-visibility:hidden]">
            <img
              src={icon}
              alt={title}
              className="w-16 h-16 object-contain mb-4 drop-shadow-lg"
            />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>

          {/* Back Side */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a2356] to-[#1d1836] rounded-[20px] shadow-xl flex flex-col justify-center items-center p-6 gap-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <span className="text-3xl">{backIcon}</span>
            <h4 className="text-white text-[18px] font-bold text-center leading-snug">
              {title}
            </h4>
            <p className="text-gray-300 text-[15px] text-center leading-relaxed">
              {description}
            </p>
            <span className="text-sm text-[#915EFF] font-semibold mt-2">
              Hover out to flip back 🔄
            </span>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      {/* Flex container with swapped layout on desktop */}
      <div className="flex flex-col md:flex-row-reverse justify-between items-center md:items-center gap-14">
        {/* Image Section */}
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          className="flex-1 flex justify-center items-center w-full h-full md:translate-x-4"
        >
          <img
            src={myphoto}
            alt="Shyam"
            className="w-[28rem] h-[28rem] rounded-2xl object-cover shadow-2xl"
          />
        </motion.div>

        {/* Text Section */}
        <div className="flex-1">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I’m Shyam Chandra Kethu, a Software Developer and Consultant at
            Genpact, specializing in Generative AI and full-stack solutions.
            I build AI-driven tools—from IDE plugins and orchestration engines
            to LLM-powered assistants—that enhance productivity and business
            outcomes.
          </motion.p>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I’ve developed cloud-based AI systems on Azure OpenAI and Amazon
            Bedrock, deployed scalable applications used by 50+ developers and
            leadership teams, and contributed to projects like AI recruitment
            assistants, automated PR reviews, and real-time code generation
            platforms.
          </motion.p>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Awarded Genpact’s Platinum Award and Titans@TechServices, I combine
            Java, Python, and AI/ML expertise to craft elegant, efficient
            solutions. My mission: create intelligent, human-centric technology
            that accelerates innovation.
          </motion.p>
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
