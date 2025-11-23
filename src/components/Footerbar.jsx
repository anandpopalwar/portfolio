import { useEffect, useState } from "react";
import { scrollToDiv } from "../Utils/ScrolltoView";
import { Contact, Profile, Projects, Skill } from "../Utils/SVGs";

const navItems = [
  { id: "homeBtn", target: "home", icon: <Profile /> },
  { id: "skillsBtn", target: "skills", icon: <Skill /> },
  { id: "projectsBtn", target: "projects", icon: <Projects /> },
  { id: "contactBtn", target: "contact", icon: <Contact /> },
];
const Footerbar = () => {
  // const useState({});
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      let btnDiv = document.getElementById(entry.target.id + "Btn");
      if (entry.isIntersecting) {
        console.log("Div is in viewport");

        btnDiv.classList.add("bg-pink-300");
        // btnDiv.children[0].classList.add("text-black");
        // btnDiv.children[0].classList.remove("text-white");
        btnDiv.children[0].childNodes[0].style.fill = "black";
      } else {
        btnDiv.classList.remove("bg-pink-300");
        btnDiv.children[0].childNodes[0].style.fill = "white";

        // btnDiv.children[0].classList.add("text-white");
        // btnDiv.children[0].classList.remove("text-black");

        console.log("not inter secing", entry.target.id);

        // delete btnDiv.style.backgroundColor;
      }
    });
  });

  useEffect(() => {
    let arr = [
      document.getElementById("home"),
      document.getElementById("skills"),
      document.getElementById("projects"),
      document.getElementById("contact"),
    ];

    observer.observe(arr[0]);
    observer.observe(arr[1]);
    observer.observe(arr[2]);
    observer.observe(arr[3]);
  }, []);

  return (
    <div className="flex fixed bottom-0 left-1/2 -translate-x-1/2 rounded-3xl backdrop-blur-4xl bg-opacity-75 background-bg-lg bg-stone-900/70 w-full lg:w-2/6 md:w-1/2  ">
      <div className="w-full h-20 rounded-3xl flex sm:px-8 justify-center btnDivs-center p-8 text-lg backdrop-blur-sm">
        <div className="grid content-center rounded-3xl w-full grid-cols-4 h-full font-bold text-slate-200  text-4xl sm:text-3xl ">
          {navItems.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="hover:text-rose-400 m-auto w-12 h-12 grid place-items-center rounded-3xl"
              onClick={() => scrollToDiv(item.target)}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footerbar;
