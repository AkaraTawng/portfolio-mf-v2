import Nav from "./Nav.js";

export default function Header(){
    return <>
        <div id="header-nav-flex-container">
            <Nav/>
            <div id="header-title-subtitle-container">
                <h1 id="header-title">Christopher Chamberlain</h1>
                <h2>Front End Web Developer</h2>
            </div>
        </div>
                </>
}