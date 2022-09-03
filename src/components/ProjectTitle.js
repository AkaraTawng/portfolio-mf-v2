import AnimatedTitle from "./AnimatedTitle"
import {ThemeContext} from "./ThemeContext.js";
import {useContext} from "react";

export default function ProjectTitle() {
    const context = useContext(ThemeContext);

    return <>
    <AnimatedTitle>
        <h1 id="project-title" className={context.theme}>Projects</h1>
    </AnimatedTitle>
    </>
}