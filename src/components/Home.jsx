import { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
function Home(){

    const [typeEffect] = useTypewriter({
        words: ['React Developer','Flutter Developer','Android Developer'],
        loop:{},
        typeSpeed: 100,
        deleteSpeed:50,
    })

    const[navbar,setNavbar] = useState(false);
    const changebackground = () => {
        
        if(window.scrollY >= 100){
            setNavbar(true);
        }
        else{
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changebackground);
    return (
    <div id="header">
    <div className="container">
    <nav className={navbar ? "navbar active-navbar" : "navbar"}>
    <h1 className="abt-prym">PRIYAM.</h1>
        <ul>
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    </div>
    <div className="header-text">
        <h1>Hi, I'm <span>Priyam</span><br/> from India</h1>
        <p>{typeEffect}</p>
    </div>
    </div>
    );
}

export default Home;