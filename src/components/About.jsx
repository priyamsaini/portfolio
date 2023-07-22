import { useState } from "react";

export function About() {

    const [state, setState] = useState(1);

    function handleClick(index){
        setState(index);
    }

    return (
        <div className="container" id="about">
            <div className="row">
                <div className="abt-1">
                    <img src="./images/user.png" alt="user-pic" className="about-image" />
                </div>
                <div className="abt-2">
                    <h1 className="sub-title">
                        About Me
                    </h1>
                    <p className="abtpara">
                        Aliqua enim deserunt irure pariatur eu culpa ex nostrud. Non do consequat qui commodo mollit adipisicing. Veniam est eiusmod laboris est. In deserunt labore duis pariatur veniam sit cillum. Excepteur aliquip quis excepteur adipisicing elit tempor eu sint ullamco ipsum id enim. Exercitation enim proident nulla irure minim nostrud velit exercitation qui.
                    </p>
                    <div className="tab-titles">
                        <p className={state === 1 ? "tab-links active-class" : "tab-links"} onClick={() => {handleClick(1)}} >Skills</p>
                        <p className={state === 2 ? "tab-links active-class" : "tab-links"} onClick={() => {handleClick(2)}} >Training/Internships</p>
                        <p className={state === 3 ? "tab-links active-class" : "tab-links"} onClick={() => {handleClick(3)}}>Education</p>
                    </div>
                    <div className={state === 1 ? "tab-contents active-tab" : "tab-contents"} id="skills">
                        <ul>
                            <li><span>Front End</span><br />HTML,CSS,JavaScript,React </li>
                            <li><span>Back End</span><br />NodeJS,PHP,MYSQL,MongoDB </li>
                            <li><span>Programming</span><br />C,C++,Java </li>
                        </ul>
                    </div>
                    <div className={state === 2 ? "tab-contents active-tab" : "tab-contents"} id="experience">
                        <ul>
                            <li><span>Web Development</span><br />2019 </li>
                            <li><span>Android Development</span><br />2022</li>
                            <li><span>Flutter Development</span><br />2023 </li>
                        </ul>
                    </div>
                    <div className={state === 3 ? "tab-contents active-tab" : "tab-contents"} id="education">
                        <ul>
                            <li><span>10 + 2</span><br />2016 -2018 </li>
                            <li><span>BCA</span><br />2018-2021 </li>
                            <li><span>MCA</span><br />2021-2023 </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}