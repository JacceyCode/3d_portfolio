import { Tilt } from "react-tilt";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <section className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <Tilt className="w-[6.3rem]" key={technology.name}>
          <div className="w-full card-gradient p-[1px] rounded-[10px] shadow-card">
            <div className="bg-tertiary rounded-[20px] p-2 h-[150px] flex justify-evenly items-center flex-col">
              <img
                src={technology.icon}
                alt={technology.name}
                className="size-12 object-contain"
              />
              <h5 className="text-white text-[15px] font-bold text-center">
                {technology.name}
              </h5>
            </div>
          </div>
        </Tilt>
      ))}
    </section>
  );
};

export default SectionWrapper(Tech, "");
