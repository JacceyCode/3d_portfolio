import { Tilt } from "react-tilt";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <section className="w-full h-[12rem] overflow-hidden flex items-center group green-pink-gradient">
      <section className="flex flex-row justify-center gap-10 animate-imageScroll group-hover:pause-scroll">
        {technologies.map((technology) => (
          <Tilt
            className="w-[6.3rem] h-[150px] cursor-pointer"
            key={technology.name}
          >
            <div className="size-full card-gradient p-[1px] rounded-[10px] shadow-card">
              <div className="bg-tertiary size-full rounded-[20px] p-2 flex justify-evenly items-center flex-col">
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
    </section>
  );
};

export default SectionWrapper(Tech, "");
