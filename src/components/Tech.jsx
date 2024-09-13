import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <section className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <section className="size-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </section>
      ))}
    </section>
  );
};

export default SectionWrapper(Tech, "");
