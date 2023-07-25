import { useTypewriter, Cursor } from "react-simple-typewriter";
import Navbar from "../components/Navbar";
import { About } from "../components/About";
import Services from '../components/Services';
import {Work} from '../components/Work';
import { Footer } from "../components/Footer";

function Home() {

    const [typeEffect] = useTypewriter({
        words: ['React Developer', 'Flutter Developer', 'Android Developer'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 50,
    })

    return (
        <>
            <div id="home">
                <Navbar />
                <div className="container">
                    <div className="header-text">
                        <h1>Hi, I'm <span>Priyam</span><br /> from India</h1>
                        <p>{typeEffect}</p>
                    </div>
                </div>
            </div>
            <About />
            <Services />
            <Footer/>
        </>
    );
}

export default Home;