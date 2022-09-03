import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import Tippy from "@tippyjs/react";
import Tooltip from "./Tooltip";
import {useContext} from "react";
import {ThemeContext} from "./ThemeContext.js";
import { useEffect } from "react";
import AnimatedPage from "./AnimatedPage";

export default function Home(props){
    const context = useContext(ThemeContext);
    useEffect(() => {
        document.title = props.title;
    }, []);


    return <>
    <AnimatedPage>
        <div id="home-wrapper">
            <section id="about-me-section" className={context.theme}>
                <h2>About Me</h2>
                <p>A meticulous, creative, and driven self-taught frontend web developer with well-rounded knowledge of modern web development best practices and technologies who can translate any design into an elegant, satisfying solution. 
                </p>
            </section>

            <section id="skills-section" className={context.theme}>
                <h2>Skills</h2>
                <div id="grid-container">
                    <ul>
                        <Tippy content={<Tooltip content="HTML/HTML5"/>}>
                            <li><AiFillHtml5 size="4rem"/></li>
                        </Tippy>

                        <Tippy content={<Tooltip content="CSS/CSS3"/>}>
                        <li>< DiCss3 size="4rem"/></li>
                        </Tippy>

                        <Tippy content={<Tooltip content="JavaScript"/>}>
                        <li><SiJavascript  size="3.5rem"/></li>
                        </Tippy>

                        <Tippy content={<Tooltip content="SCSS"/>}>
                        <li><DiSass  size="4rem"/></li>
                        </Tippy>

                        <Tippy content={<Tooltip content="Git/GitHub"/>}>
                        <li><FaGitAlt  size="4rem"/></li>
                        </Tippy>

                        <Tippy content={<Tooltip content="ReactJS"/>}>
                        <li><SiReact  size="4rem"/></li>
                        </Tippy>
                    </ul>
                </div>
            </section>
        </div>
    </AnimatedPage>
    </>;
}