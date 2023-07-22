import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';

export function Contact() {

    return (
        <div className="container" id='contact'>
            <h1 className="sub-title">Contact</h1>
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
                    <form>
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your E-mail" required />
                        <textarea rows={6} cols={50} name="message" placeholder="Write your message..." />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}