import { Tilt } from "react-tilt";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <section className="w-full h-[30rem] overflow-hidden flex items-center group green-pink-gradient relative before:absolute after:absolute before:bg-primary after:bg-primary before:h-[15rem] after:h-[15rem] before:inset-top after:inset-bottom after:top-[unset] before:rounded-b-[400px] after:rounded-t-[400px] -my-36">
      <section className="flex flex-row justify-center gap-10 animate-imageScroll hover:pause-scroll">
        {technologies.map((technology) => (
          <Tilt
            className="w-[10rem] h-[18rem] cursor-pointer"
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

export default SectionWrapper(Tech, "tech");
