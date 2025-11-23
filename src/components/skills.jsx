import bootstap from "../PNG/bootstap.png";
import css from "../PNG/css.png";
import js from "../PNG/js.png";
import html from "../PNG/html.png";
import github from "../PNG/github.png";
import git from "../PNG/git.png";
import ts from "../PNG/ts.png";
import tailwindcss from "../PNG/tailwindcss.png";
import react from "../PNG/react.png";
import redux from "../PNG/redux.png";

const skills = () => {
  let arr = [
    react,
    redux,
    js,
    ts,
    bootstap,
    tailwindcss,
    github,
    git,
    html,
    css,
  ];

  return (
    <div
      className="skills  w-full rounded-3xl container     border-2 border-black bg-stone-300 bg-opacity-75 m-auto   p-4 sm:p-4 md:p-8 lg:p-12   "
      id="skills"
    >
      {/* <img src={BG} className=" object-contain" alt="" /> */}
      <h1 className="font-extrabold text-4xl my-4">Skills !</h1>
      <div className="grid  grid-cols-3  sm:grid-cols-3 font-medium  md:grid-cols-3 lg:grid-cols-6 gap-4 text-center my-4  mx-auto ">
        {arr.map((img, idx) => (
          <div className="grid place-content-center" key={idx}>
            <img
              src={img}
              className="w-20 flex  justify-center hover:transition ease-in-out  mx-auto   hover:-translate-y-1 hover:scale-110  duration-300"
              // alt="html"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default skills;
