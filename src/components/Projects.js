import { MdLockClock } from "react-icons/md";
import ProjectItem from "./ProjectItem";
export default function Projects(){
    return <>
        <ProjectItem title={"Calculator"} image={require("../assets/img/calculator.png")} repo={"https://github.com/AkaraTawng/Calculator"} site={"#"}/>
        
        <ProjectItem title={"Man With a Spade"} image={require("../assets/img/mws.png")} repo={"https://github.com/AkaraTawng/man-with-a-spade"} site={"#"}/>
        
        <ProjectItem title={"Cactus Connoiseur"} image={require("../assets/img/cactus.png")} repo={"https://github.com/AkaraTawng/product-landing-page"} site={"#"}/>
        
        <ProjectItem title={"Exercise Survery Form"} image={require("../assets/img/survey.png")} repo={"https://github.com/AkaraTawng/survey-form"} site={"#"}/>
        
        <ProjectItem title={"Income Tracker"} image={require("../assets/img/incomeblur4.png")} repo={"#"} viewrepo={<MdLockClock/>} viewsite={<MdLockClock/>} site={"#"}/>
    </>;
}