import {NavLink} from "react-router-dom";

export default function Nav(){
    return <ul>
        <li>
            <NavLink activeClassName="active" exact to="/">Home</NavLink>
        </li>
        <li>
            <NavLink activeClassName="active" exact to="/projects">Projects</NavLink>
        </li>
        <li>
            <NavLink activeClassName="active" exact to="/resume">Resume</NavLink>
        </li>
        <li>
            <NavLink activeClassName="active" exact to="/contact">Contact</NavLink>
        </li>
    </ul>;
}