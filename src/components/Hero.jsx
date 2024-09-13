import { motion } from "framer-motion";

import { BiLogoWhatsapp } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="size-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-60 h-36 violet-gradient" />

          <div className="flex flex-col space-y-6 z-10 -mt-10">
            <a
              href="https://github.com/JacceyCode"
              target="_blank"
              className="bg-[#ac88fa] p-1 rounded-md animate-bounce"
            >
              <FaGithub size={26} color="white" />
            </a>
            <a
              href="https://www.linkedin.com/in/jacob-oluwasesan-adebayo/"
              target="_blank"
              className="bg-[#ac88fa] p-1 rounded-md animate-[bounce_2s_infinite]"
            >
              <FaLinkedin size={26} color="#0077B5" />
            </a>
            <a
              href="https://twitter.com/code_sesan"
              target="_blank"
              className="bg-[#ac88fa] p-1 rounded-md animate-bounce"
            >
              <FaXTwitter size={26} color="black" />
            </a>
            <a
              href="https://wa.me/2348134557536"
              target="_blank"
              className="bg-[#ac88fa] p-1 rounded-md animate-[bounce_2s_infinite]"
            >
              <BiLogoWhatsapp size={26} color="#075E54" />
            </a>
          </div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi 👋, I am <span className="text-[#915eff]">Jacob</span>{" "}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build and deploy real-world web and mobile applications.
            <br className="hidden sm:block" /> I ensure your application
            improves your productivity as well as profitability.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="size-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
