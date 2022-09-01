import {useContext} from "react";
import {ThemeContext} from "./ThemeContext.js";
export default function ProjectTitle() {
    const context = useContext(ThemeContext);
    return <h1 className={context.theme} id="project-title">Projects</h1>;
}