import React from "react";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const TechCard = ({ index, title, icon }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0.2 * index, 0.75)} className="bg-tertiary rounded-[20px] p-5 w-[130px] sm:w-[180px] flex flex-col items-center shadow-card">
      <img src={icon} alt={title} className="w-16 h-16 object-contain" />
      <p className="text-white text-center text-[14px] mt-2">{title}</p>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <div className="w-full flex flex-wrap gap-5 justify-center">
      {technologies.map((tech, index) => (
        <TechCard key={tech.name} index={index} title={tech.name} icon={tech.icon} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
