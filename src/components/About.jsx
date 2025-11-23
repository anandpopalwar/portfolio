const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="container w-full mx-auto rounded-3xl p-6 md:p-8 lg:p-12 bg-transparent text-white border-2"
    >
      <h2 id="about-heading" className="font-extrabold text-4xl mb-6">
        About me !
      </h2>

      <div className="text-neutral-400 font-semibold text-base md:text-lg lg:text-xl space-y-4 leading-relaxed">
        <p>
          Hi, I’m <span className="text-white">Anand Popalwar</span>, a Frontend
          Developer with{" "}
          <span className="text-white">2+ years of experience</span> building
          real-world dashboards, AI-driven interfaces, and scalable React
          applications.
        </p>

        <p>
          I specialize in{" "}
          <span className="text-white">
            React.js, Tailwind, SCSS, and clean UI architecture
          </span>
          , with a strong focus on performance, reusable components, and
          intuitive UX.
        </p>

        <p>
          Previously, I worked at <span className="text-white">Easemyai</span>,
          where I:
        </p>

        <ul className="list-disc ml-6 space-y-1 text-neutral-300">
          <li>
            Built an AI-powered{" "}
            <span className="text-white">box detection dashboard</span> using
            React + WebSockets.
          </li>
          <li>
            Developed client-facing dashboards for{" "}
            <span className="text-white">GMR</span> &amp;{" "}
            <span className="text-white">Mahindra Logistics</span>.
          </li>
          <li>
            Optimized UI performance, improved async flows, and created{" "}
            <span className="text-white">reusable UI patterns</span>.
          </li>
        </ul>

        <p>
          I enjoy turning complex requirements into simple, clean, and
          responsive interfaces.
        </p>

        <a
          href="mailto:anandpopalwar444@gmail.com"
          className="inline-block mt-2 text-white underline-offset-2 hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 transform transition duration-300 hover:-translate-y-1 hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email Anand"
        >
          @ anandpopalwar444@gmail.com
        </a>
      </div>
    </section>
  );
};

export default About;
