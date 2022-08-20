import Nav from "./Nav.js";
import Theme from "./Theme.js";
export default function Header(){
    return <>
        <div id="header-wrapper">
            <div id="nav-theme-flex-container">    
                <Nav/>
                <Theme/>
            </div>   
            <div id="header-title-subtitle-container">
                <h1 id="header-title">Christopher Chamberlain</h1>
                <h2>Front End Web Developer</h2>
            </div>            
        </div>
     </>};