import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[200px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-3 px-10 min-h-[220px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="size-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">
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
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="my-4 max-sm:mb-10 text-secondary text-[17px] max-w-3xl leading-[30px] text-pretty"
      >
        A software developer👩‍💻 with 3+ years of experience in the engineering of
        robust web🌐 and mobile📱 applications that solves real-world problems.
        <br />
        I specializing in designing and optimizing scalable applications.
        Proficient in microservices architecture 🕸️, serverless computing ☁️,
        and data structures 🗄️. Experienced in enhancing application
        performance, security 🔐, and scalability 🚀 through agile methodologies
        🏋️‍♂️ to drive user engagement and operational efficiency 💪.
        <br />
        My primary stack is{" "}
        <span className="text-white italic">JavaScript</span>, with a pinch of
        Java & Python.
      </motion.p>

      <div className="hidden sm:flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
