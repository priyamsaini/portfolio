import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import projects from "../assets/projects";

export default function Projects() {
  return (
    <section className="bg-primary">
      <h2 className="bg-clip-text bg-gradient-to-r from-tertiary to-quaternary py-8 font-bold text-4xl text-center text-transparent">
        Projects
      </h2>
      <div className="flex flex-col">
        {projects.map((project) => {
          return (
            <div
              key={project.name}
              className="flex md:flex-row flex-col-reverse bg-secondary/60 shadow-lg shadow-secondary mx-[10%] md:mx-auto my-6 rounded-xl md:w-[50%]"
            >
              <div className="flex flex-col flex-1 md:justify-center items-center md:items-start gap-4 bg-secondary p-4 rounded-b-xl md:rounded-r-none md:rounded-l-xl">
                <h3 className="font-semibold text-3xl text-tertiary">
                  {project.name}
                </h3>
                <p className="text-base text-center text-quaternary/80 md:text-left">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {project.techStack.map((tech) => (
                    <li
                      key={tech}
                      className="border-quaternary/90 p-1 border rounded-2xl w-[120px] font-thin text-base text-center text-quaternary/90 list-none"
                    >
                      #{tech}
                    </li>
                  ))}
                </div>
                <button className="rounded-md hover:scale-105 bg-tertiary text-quaternary/90 transition duration-200 ease">
                  {" "}
                  <Link
                    className="flex items-center gap-1 px-4 py-2 text-base"
                    to={project.live_link}
                    target="_blank"
                  >
                    View Site <FiExternalLink />
                  </Link>{" "}
                </button>
              </div>
              <div className="md:w-[300px] md:h-[400px]">
                <img
                  className="rounded-t-xl md:rounded-r-xl md:rounded-l-none w-full h-full object-cover"
                  src={project.image}
                  alt={project.name}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col justify-center items-center gap-5 bg-gradient-to-r from-tertiary/80 to-quaternary/20 h-[45vh]">
        <h2 className="font-semibold text-2xl text-quaternary/90 md:text-6xl">
          Let's build something together
        </h2>
        <button className="border-quaternary hover:bg-quaternary/90 p-4 border rounded-md md:w-[13%] font-medium text-quaternary/90 hover:text-tertiary transition duration-200 ease">
          <Link to="/contact">Contact Me</Link>
        </button>
      </div>
    </section>
  );
}
