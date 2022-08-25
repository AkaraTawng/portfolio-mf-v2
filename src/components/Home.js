import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { SiReact } from "react-icons/si";



export default function Home(){
    return <>
    <div id="home-wrapper">
        <section id="about-me-section">
            <h2>About Me</h2>
            <p>I'm a meticulous front-end web developer with good knowledge of modern web development practices who can translate any design into a kick-ass website.
            </p>
        </section>

        <section id="skills-section">
            <h2>Skills</h2>
            <div>
                <ul>
                    <li><AiFillHtml5 size={40}/></li>
                    <li>< DiCss3  size={40}/></li>
                    <li><SiJavascript  size={40} /></li>
                    <li><DiSass  size={40}/></li>
                    <li><FaGitAlt  size={40}/></li>
                    <li><SiReact  size={40}/></li>
                </ul>
            </div>
        </section>
    </div>
    </>;
}