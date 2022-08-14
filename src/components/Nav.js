import {NavLink} from "react-router-dom";

export default function Nav(){
    return <div id="nav-links-container">
        <ul>
            <li>
                <NavLink activeClassName="active" to="/contact">Contact</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/projects">Projects</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" target="_blank" rel="noreferrer" to="/resume">Resume</NavLink>
            </li>
            <li>
                <NavLink to="/linkedin" target="_blank" rel="noreferrer">Linkedin</NavLink>
            </li>
            <li>
                <NavLink to="/github" target="_blank" rel="noreferrer">Github</NavLink>
            </li>
        </ul>;
    </div>
}