import {NavLink} from "react-router-dom";

export default function Nav(){
    return <>
    
        <div id="nav-links-container">
            <nav>
                <ul>
                    <li>
                        <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" activeClassName="active" to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" activeClassName="active" to="/projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" activeClassName="active" target="_blank" rel="noreferrer" to="/resume">Resume</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/linkedin" target="_blank" rel="noreferrer">Linkedin</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/github" target="_blank" rel="noreferrer">Github</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </>}