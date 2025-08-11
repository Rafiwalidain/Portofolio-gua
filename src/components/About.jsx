// import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

import profile from "../assets/foto1.png"; // sesuaikan path jika berbeda

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full" tiltMaxAngleX={45} tiltMaxAngleY={45} scale={1} transitionSpeed={450}>
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" loading="lazy" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      {/* WRAPPER SEMUA */}
      <motion.div variants={fadeIn("", "", 0.1, 1)} className="mt-4 flex flex-col md:flex-row gap-10 items-start">
        {/* KIRI: Judul + Deskripsi */}
        <div className="flex-1">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            I'm <span className="text-[#915eff] font-bold">Muhammad Rafi Walidain</span>, an active Informatics Engineering student at the Veteran National Development University of East Java, with a strong interest in web and data
            development. I have experience in organization, event management, and technology based project development. I'm accustomed to working both independently and in teams, and I'm able to adapt to new technologies. I'm proficient in
            various software and programming languages, including Microsoft Office, Photoshop, CorelDraw, HTML, CSS, JavaScript, MySQL, PHP, C, C++, Python, and Laravel.
          </p>
        </div>

        {/* KANAN: FOTO */}
        <motion.div variants={fadeIn("right", "spring", 0.3, 1)} className="w-full md:w-[310px] flex-shrink-0">
          <img src={profile} alt="Profile" className="w-full h-[400px] rounded-2xl object-cover shadow-lg border border-white/10" loading="lazy" />
        </motion.div>
      </motion.div>

      {/* Kartu Service */}
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
