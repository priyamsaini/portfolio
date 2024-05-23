import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState(false);
  const changeTheme = (theeme) => {
    setTheme(theeme);
  };

  return (
    <div className={"font-poppins" + (theme ? " light" : " dark")}>
      <BrowserRouter>
        <Navbar onSelectTheme={changeTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
