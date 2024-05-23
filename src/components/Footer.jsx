import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex md:flex-row flex-col justify-center md:justify-around items-center gap-1 bg-secondary min-h-20">
      <p className="text-quaternary/30">
        Copyright ©{" "}
        <span className="hover:underline hover:cursor-pointer">
          Priyam Saini
        </span>{" "}
        {new Date().getFullYear()}
      </p>
      <p className="flex gap-4">
        <Link
          to="https://mail.google.com/mail/?view=cm&fs=1&to=webdev.priyam@gmail.com&su=SUBJECT&body=BODY"
          target="_blank"
          className="text-blue-800 underline"
        >
          Email
        </Link>
        <Link
          to="https://linkedin.com/in/priyam-saini"
          className="text-blue-800 underline"
          target="_blank"
        >
          LinkedIn
        </Link>
        <Link
          to="https://github.com/priyamsaini"
          className="text-blue-800 underline"
          target="_blank"
        >
          Github
        </Link>
      </p>
    </footer>
  );
}
