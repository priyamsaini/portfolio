import CodeIcon from '@mui/icons-material/Code';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ComputerIcon from '@mui/icons-material/Computer';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
function Services(){
    return (
        <div id="services">
            <div className="container">
                <h1 className="sub-title">Services</h1>
                <div className="services-list">
                    <div>
                    <CodeIcon fontSize='large'/>
                        <h1>Coding/Programming</h1>
                        <p>Aliquip id enim culpa eu nulla laborum sunt veniam laboris in sunt voluptate voluptate.</p>
                        <a href="#"><OpenInNewIcon/></a>
                    </div>
                    <div>
                    <PhoneAndroidIcon fontSize='large'/>
                        <h1>Application Development</h1>
                        <p>Aliquip id enim culpa eu nulla laborum sunt veniam laboris in sunt voluptate voluptate.</p>
                        <a href="#"><OpenInNewIcon/></a>
                    </div>
                    <div>
                    <ComputerIcon fontSize='large'/>
                        <h1>UI/UX Design</h1>
                        <p>Aliquip id enim culpa eu nulla laborum sunt veniam laboris in sunt voluptate voluptate.</p>
                        <a href="#"><OpenInNewIcon/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Services;