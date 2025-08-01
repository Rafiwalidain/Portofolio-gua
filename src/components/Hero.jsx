import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={"${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5"}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className="text-[40px] lg:text-[60px] font-bold text-white">
            Hi, I'm{" "}
            <span className="text-[#915eff]">
              <Typewriter words={["Rafi"]} loop={true} cursor cursorStyle="|" typeSpeed={100} deleteSpeed={100} delaySpeed={1000} />
            </span>
          </h1>

          <p className="mt-2 text-white-100 text-[20px]">
            I'm Junior Web Developer <br /> and graphic designer
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-6 bottom-9 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[33px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div animate={{ y: [0, 14, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }} className="w-3 h-3 rounded-full bg-secondary mb-1" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
