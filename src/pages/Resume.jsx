import { BsCodeSlash } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Resume() {
  const professionalSkills = [
    "Web Development",
    "User Interface Design",
    "Responsive Design",
    "SEO",
  ];
  const languages = [
    "HTML",
    "CSS",
    "JavaScript",
    "React Js",
    "Node Js",
    "MySQL",
  ];
  return (
    <section className="bg-primary">
      <h2 className="bg-clip-text bg-gradient-to-r from-quaternary to-tertiary py-8 font-bold text-4xl text-center text-transparent">
        Resume
      </h2>
      <div>
        <h3 className="mx-5 md:my-0 md:ml-[20%] font-medium text-3xl text-tertiary">
          Experience
        </h3>
        <div className="flex md:flex-row flex-col bg-secondary/60 shadow-lg shadow-secondary mx-auto my-10 p-4 md:p-8 rounded-lg w-[90%] md:w-[50%]">
          <div className="flex flex-col items-center md:items-start bg-secondary p-2 md:p-4 rounded-lg md:w-[30%]">
            <h4 className="font-medium text-lg text-tertiary">2022 - 2022</h4>
            <h5 className="mt-2 font-medium text-base text-quaternary/70">
              Android Developer
            </h5>
            <p className="md:mr-6 font-light text-quaternary/60 text-sm">
              ThinkNext Technologies , Mohali
            </p>
          </div>
          <p className="p-2 md:p-4 md:w-[70%] text-base text-justify text-quaternary/80 md:text-left">
            From June to September, I gained hands-on experience in web
            development, focusing on building responsive, user-friendly websites
            using HTML, CSS, and JavaScript. I also worked with frameworks like
            React to enhance functionality and performance.
          </p>
        </div>
        <div className="flex md:flex-row flex-col bg-secondary/60 shadow-lg shadow-secondary mx-auto my-10 p-4 md:p-8 rounded-lg w-[90%] md:w-[50%]">
          <div className="flex flex-col items-center md:items-start bg-secondary p-2 md:p-4 rounded-lg md:w-[30%]">
            <h4 className="font-medium text-lg text-tertiary">2019 - 2019</h4>
            <h5 className="mt-2 font-medium text-base text-quaternary/70">
              Web Developer
            </h5>
            <p className="md:mr-6 font-light text-quaternary/60 text-sm">
              Grapess Solutions , Yamunanagar
            </p>
          </div>
          <p className="p-2 md:p-4 md:w-[70%] text-base text-justify text-quaternary/80 md:text-left">
            From August to September, I worked intensively on Android
            development, honing my skills in Java/Kotlin, UI design, and app
            functionality. This experience enhanced my ability to create robust
            and user-friendly mobile applications.
          </p>
        </div>
      </div>
      <div>
        <h3 className="mx-5 md:my-0 md:ml-[20%] font-medium text-3xl text-quaternary/80">
          Education
        </h3>
        <div className="flex md:flex-row flex-col bg-secondary/60 shadow-lg shadow-secondary mx-auto my-10 p-4 md:p-8 rounded-lg w-[90%] md:w-[50%]">
          <div className="flex flex-col items-center md:items-start bg-secondary p-2 md:p-4 rounded-lg md:w-[30%]">
            <h4 className="font-medium text-lg text-tertiary">2021 - 2023</h4>
            <h5 className="mt-2 font-medium text-base text-quaternary/70">
              MCA
            </h5>
            <p className="md:mr-6 font-light text-quaternary/60 text-sm">
              Yamunanagar, HR
            </p>
          </div>
          <p className="p-2 md:p-4 md:w-[70%] text-base text-justify text-quaternary/80 md:text-left">
            I completed my Master of Computer Applications gaining expertise in
            software development and modern computing technologies.
          </p>
        </div>
        <div className="flex md:flex-row flex-col bg-secondary/60 shadow-lg shadow-secondary mx-auto my-10 p-4 md:p-8 rounded-lg w-[90%] md:w-[50%]">
          <div className="flex flex-col items-center md:items-start bg-secondary p-2 md:p-4 rounded-lg md:w-[30%]">
            <h4 className="font-medium text-lg text-tertiary">2018 - 2021</h4>
            <h5 className="mt-2 font-medium text-base text-quaternary/70">
              BCA
            </h5>
            <p className="md:mr-6 font-light text-quaternary/60 text-sm">
              Mullana , HR
            </p>
          </div>
          <p className="p-2 md:p-4 md:w-[70%] text-base text-justify text-quaternary/80 md:text-left">
            I completed my Bachelor of Computer Applications gaining a solid
            foundation in programming and software development. My studies
            included hands-on projects and internships.
          </p>
        </div>
      </div>
      <div className="pb-6">
        <div className="flex flex-col bg-secondary/60 shadow-lg shadow-secondary mx-auto mt-10 p-4 md:p-8 rounded-lg w-[90%] md:w-[50%]">
          <div>
            <h3 className="flex items-center gap-2 bg-clip-text bg-gradient-to-r from-tertiary to-quaternary font-bold text-3xl text-transparent">
              <FaTools className="bg-gradient-to-r from-tertiary to-quaternary/80 p-1 rounded-md text-secondary" />{" "}
              Professional Skills
            </h3>
            <ul className="flex md:flex-row flex-col md:flex-wrap gap-4 my-4">
              {professionalSkills.map((item) => (
                <li
                  key={item}
                  className="bg-secondary px-5 py-3 rounded-2xl md:w-[30%] font-thin text-base text-center text-quaternary/90 md:text-left"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="flex items-center gap-2 bg-clip-text bg-gradient-to-r from-tertiary to-quaternary mt-2 font-bold text-3xl text-transparent">
              <BsCodeSlash className="bg-gradient-to-r from-tertiary to-quaternary/80 p-1 rounded-md text-secondary" />{" "}
              Languages
            </h3>
            <ul className="flex md:flex-row flex-col md:flex-wrap gap-4 my-4">
              {languages.map((item) => (
                <li
                  key={item}
                  className="bg-secondary px-6 py-3 rounded-2xl md:w-[30%] font-thin text-base text-center text-quaternary/90 md:text-left"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-5">
        <button className="w-[250px]">
          <Link
            to="/resume/priyam_saini_resume.pdf"
            target="_blank"
            className="flex items-center gap-2 bg-tertiary px-4 py-2 rounded-md font-light text-quaternary/90 text-xl"
          >
            <LuDownload /> Download Resume
          </Link>
        </button>
      </div>
    </section>
  );
}
