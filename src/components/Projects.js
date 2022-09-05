import { MdLockClock } from "react-icons/md";
import ProjectItem from "./ProjectItem";
import { useEffect } from "react";
import AnimatedPage from "./AnimatedPage";
export default function Projects(props){
    useEffect(() => {
        document.title = props.title;
    }, []);


  
    return <>
    <AnimatedPage>
        <div id="project-item-grid-container">
          
            <ProjectItem className="cl" title={"Calculator"} image={require("../assets/img/calculator.png")} repo={"https://github.com/AkaraTawng/Calculator"} site={"#"}/>
            
            <ProjectItem className="mws" title={"Man With a Spade"} image={require("../assets/img/mws.png")} repo={"https://github.com/AkaraTawng/man-with-a-spade"} site={"#"}/>

            <ProjectItem className="cc" title={"Cactus Connoiseur"} image={require("../assets/img/cactus.png")} repo={"https://github.com/AkaraTawng/product-landing-page"} site={"#"}/>

            <ProjectItem className="sf" title={"Exercise Survey Form"} image={require("../assets/img/survey.png")} repo={"https://github.com/AkaraTawng/survey-form"} site={"#"}/>
        </div>
            <ProjectItem className="it" title={"Income Tracker"} image={require("../assets/img/incomeblur4.png")} repo={"#"} viewrepo={<MdLockClock/>} viewsite={<MdLockClock/>} site={"#"}/>
    </AnimatedPage>
    </>;
}