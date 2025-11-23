import { Info } from "../Utils/SVGs";
import Button from "./common/Button";
import { scrollToDiv } from "../Utils/ScrolltoView";

const home = () => {
  return (
    <div
      className="home container min-h-80   w-full m-auto rounded-3xl  p-4 sm:p-4 md:p-8 lg:p-12  py-8  "
      id="home"
    >
      <div className="homeleft   ">
        <div>
          <h1 className=" font-extrabold  text-3xl sm:text-4xl md:text-4xl lg:text-4xl">
            Hi,
          </h1>
          <h1 className=" font-extrabold  text-3xl  sm:text-4xl md:text-4xl lg:text-4xl ">
            I'm Anand popalwar,
          </h1>
          <div className=" my-2 ">
            <p className="font-bold font-mono text-base sm:text-base md:text-xl lg:text-xl  ">
              Frontend Developer • React.js Specialist
            </p>
            <p className="font-bold font-mono text-base sm:text-base md:text-xl lg:text-xl  ">
              Building fast, modern, and scalable web applications.
            </p>

            <p className="m-0 font-mono text-base sm:text-base md:text-xl lg:text-xl   animate-pulse text-yellow-50 flex items-center gap-2">
              <Info fill="white" />
              ready to get hired
            </p>
          </div>
        </div>
        <div className="grid grid-rows-1 gap-2">
          <Button
            name="Hire me"
            onClick={() => {
              scrollToDiv("contact");
            }}
          />

          <Button
            name="Projects"
            onClick={() => {
              scrollToDiv("projects");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default home;
