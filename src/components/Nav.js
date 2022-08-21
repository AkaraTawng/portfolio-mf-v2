import MobileNav from "./MobileNav";
import Navigation from "./Navigation";

export default function Nav(){
    // return <p id="nav-placeholder">Nav placeholder</p>
    return <>
        <div id="nav-wrapper">
           <MobileNav/>
           <Navigation/>
        </div>
    </>}