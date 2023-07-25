import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Navbar from './Navbar';
import { Footer } from './Footer';


export function Work() {
    return (
        <>
        <Navbar/>
        <div className="container" id="work">
            <h1 className="sub-title">Work</h1>
            <div className="work-list">
                <div className="work">
                    <img src="./images/work-1.png" />
                    <div className="layer">
                        <h3>Web Designer</h3>
                        <p>Eiusmod proident adipisicing cupidatat magna minim reprehenderit culpa ex sit amet.</p>
                        <OpenInNewIcon />
                    </div>
                </div>
                <div className="work">
                    <img src="./images/work-2.png" />
                    <div className="layer">
                        <h3>Web Designer</h3>
                        <p>Eiusmod proident adipisicing cupidatat magna minim reprehenderit culpa ex sit amet.</p>
                        <OpenInNewIcon />
                    </div>
                </div>
                <div className="work">
                    <img src="./images/work-3.png" />
                    <div className="layer">
                        <h3>Web Designer</h3>
                        <p>Eiusmod proident adipisicing cupidatat magna minim reprehenderit culpa ex sit amet.</p>
                        <OpenInNewIcon />
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}