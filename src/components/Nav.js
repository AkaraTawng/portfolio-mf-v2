import {NavLink} from "react-router-dom";

export default function Nav(){
    return <ul>
        <li>
            <NavLink activeClassName="active" exact to="/home">Home</NavLink>
        </li>
        <li>
            <NavLink activeClassName="active" exact to="/projects">Projects</NavLink>
        </li>
        <li>
            <NavLink activeClassName="active" exact to="/resume">Resume</NavLink>
        </li>
        <li>
            <NavLink to="linkedin" target="_blank" rel="noreferrer">Linkedin</NavLink>
           {/* <a href="https://www.linkedin.com/feed/" rel="noreferrer" target="_blank">LinkedIn</a> */}
        </li>
    </ul>;
}