import profilePicture from "../assets/profile.png";
import { Link } from "react-router-dom";
import { HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <section className="flex md:flex-row flex-col-reverse md:justify-evenly items-center gap-2 bg-primary p-4 w-full h-screen">
        <div className="flex flex-col md:items-start gap-4 p-2">
          <p className="font-light text-base text-center text-quaternary/80 md:text-lg tracking-wider">
            HI, THERE
          </p>
          <h1 className="bg-clip-text bg-gradient-to-r from-tertiary/70 to-tertiary font-bold text-4xl text-center text-transparent md:text-5xl">
            I'm Priyam Saini
          </h1>
          <h3 className="font-semibold text-3xl text-center text-quaternary/90 md:text-4xl">
            Front-End Developer
          </h3>
          <div className="flex md:flex-row flex-col gap-4 mx-auto md:mx-0 w-[90%]">
            <button className="bg-tertiary hover:bg-tertiary/80 px-8 py-4 rounded-lg w-full font-semibold text-base text-quaternary">
              <Link to="/resume">Resume</Link>
            </button>
            <button className="bg-transparent hover:bg-quaternary/90 px-8 py-4 border border-tertiary rounded-lg w-full font-semibold text-base text-tertiary hover:text-tertiary transition duration-100 ease">
              <Link to="/projects">Projects</Link>
            </button>
          </div>
        </div>
        <div className="bg-gradient-to-tr from-tertiary/50 to-tertiary rounded-full w-[300px] md:w-[400px] h-[300px] md:h-[400px] overflow-hidden [200px]">
          <img
            className="w-full h-full object-cover"
            src={profilePicture}
            alt="profile picture"
          />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-4 bg-primary/95 px-5 py-[5%]">
        <h2 className="bg-clip-text bg-gradient-to-r from-tertiary to-quaternary font-bold text-4xl text-transparent">
          About Me
        </h2>
        <p className="font-light text-center text-quaternary/90 text-xl tracking-wider">
          My name is Priyam Saini and i create websites.
        </p>
        <p className="mt-2 md:w-[50%] font-normal text-center text-lg text-quaternary/80">
          I have a Passion for building websites. My journey in this industry
          began in 2018. Since then, I have been on a quest to challenge my
          skills to meet the industry standards. As a Web Developer , I try to
          make modern webstes. I have a strong focus on react. With a keen eye
          for detail and a commitment to excellence, I strive to give my all in
          work.
        </p>
        <div className="flex gap-4">
          <Link
            target="_blank"
            to="https://mail.google.com/mail/?view=cm&fs=1&to=webdev.priyam@gmail.com&su=SUBJECT&body=BODY"
          >
            <HiMail className="bg-gradient-to-r from-tertiary to-quaternary/60 p-1 rounded-lg text-5xl text-secondary" />
          </Link>
          <Link target="_blank" to="https://linkedin.com/in/priyam-saini">
            <FaLinkedin className="bg-gradient-to-r from-tertiary to-quaternary/60 p-1 rounded-lg text-5xl text-secondary" />
          </Link>
          <Link target="_blank" to="https://github.com/priyamsaini">
            <FaGithub className="bg-gradient-to-r from-tertiary to-quaternary/60 p-1 rounded-lg text-5xl text-secondary" />
          </Link>
        </div>
      </section>
    </div>
  );
}
