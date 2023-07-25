import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';

export function Contact() {

    return (
        <>
            <Navbar />
            <div className="container" id='contact'>
                <h1 className="sub-title">Get in touch</h1>
                <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55210.72821623758!2d77.22901220892716!3d30.1322403532904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ef99b8b19ea25%3A0xfc76e2b1f391902!2sYamuna%20Nagar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1690269053531!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="row">
                    <div className="ct-left">
                        <h3>Details</h3>
                        <MailOutlineIcon /><p>priyam@gmail.com</p>
                        <PhoneIcon /><p>7082329681</p>
                        <a className="download" href='./resume.pdf' target='_blank'>Download Resume</a>
                        <h3>Social</h3>
                        <a href="#"><LinkedInIcon /></a>
                        <a href="#"><GitHubIcon /></a>
                        <a href="#"><WhatsAppIcon /></a>
                    </div>
                    <div className="ct-right">
                        <form action='https://formspree.io/f/xdorkjnk' method='post'>
                            <input type="text" name="name" placeholder="Your Name" required />
                            <input type="email" name="email" placeholder="Your E-mail" required />
                            <textarea rows={6} name='message' cols={50} placeholder="Write your message..." required />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
