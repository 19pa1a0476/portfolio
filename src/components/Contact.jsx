import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Résumé</p>
        <h3 className={styles.sectionHeadText}>Shyam Chandra Kethu</h3>
        <div className="mt-5 text-secondary text-[17px] max-w-3xl leading-[30px]">
          <div>
            <strong>Location:</strong> Pamuru, Andhra Pradesh<br/>
            <strong>Email:</strong>{" "}
            <a href="mailto:kethu.shyam@gmail.com" className="text-blue-400 underline">kethu.shyam@gmail.com</a><br/>
            <strong>LinkedIn:</strong>{" "}
            <a href="LINKEDIN_URL" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">View Profile</a><br/>
            <strong>GitHub:</strong>{" "}
            <a href="GITHUB_URL" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">View Profile</a>
          </div>
          <hr className="my-4" />
          <div>
            <strong>Professional Summary:</strong><br />
            Innovative Software Developer with 2+ years' experience in Java, Python, and AI/ML technologies. Currently, Consultant at Genpact specializing in Generative AI-powered IDE plugins and AI orchestration engines. Adept at designing cloud-based AI solutions (Azure, AWS), optimizing system performance, and building LLM-integrated applications. Passionate about scalable, AI-driven solutions to boost business productivity.
          </div>
          <hr className="my-4" />
          <div>
            <strong>Key Skills:</strong>
            <ul className="list-disc ml-5">
              <li>Programming: Java, Python, SQL</li>
              <li>Frameworks/Libraries: Flask, LangChain, FastAPI, Spring Boot</li>
              <li>Cloud/DevOps: AWS (EC2, S3), Microsoft Azure, Docker</li>
              <li>Databases: MySQL, PostgreSQL</li>
              <li>AI/ML: Generative AI, LLMs, Azure OpenAI, Amazon Bedrock</li>
              <li>Tools: Git, Jira, Postman, REST APIs, OAuth</li>
              <li>Methodologies: Agile, Scrum, Test-Driven Development (TDD)</li>
            </ul>
          </div>
          <hr className="my-4" />
          <div>
            <strong>Major Achievements:</strong>
            <ul className="list-disc ml-5">
              <li>Awarded ‘Titans@TechServices’ and Genpact’s ‘Platinum Award’ for leadership and impact</li>
              <li>Built orchestration engines & IDE/plugins adopted by 50+ devs and top leadership</li>
              <li>Reduced documentation creation time by 20-25% with automation tools</li>
            </ul>
          </div>
          <hr className="my-4" />
          <div>
            <strong>Education:</strong><br />
            2019–2023 | B.Tech, Electronics and Communication Engineering, Vishnu Institute of Technology, Bhimavaram (CGPA: 8.64)<br />
            2017–2019 | Intermediate, Narayana Junior College, Nellore (98%)
          </div>
          <hr className="my-4" />
          <div>
            <strong>Certifications:</strong>
            <ul className="list-disc ml-5">
              <li>AWS Certified Cloud Practitioner (Sep 2024)</li>
              <li>Full Stack Developer Course (Jan–June 2023)</li>
              <li>Machine Learning Algorithms (Advanced) (Sep 2022)</li>
              <li>Data Structures on Udemy (Feb 2022)</li>
            </ul>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
