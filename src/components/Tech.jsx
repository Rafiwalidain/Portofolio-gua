import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const TechCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[180px] w-full" tiltMaxAngleX={45} tiltMaxAngleY={45} scale={1} transitionSpeed={450}>
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[220px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[18px] font-bold text-center mt-4">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Tech = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {technologies.map((tech, index) => (
        <TechCard key={tech.name} index={index} title={tech.name} icon={tech.icon} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
