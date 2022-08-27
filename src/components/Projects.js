import ProjectItem from "./ProjectItem";
export default function Projects(){
    return <>
        <ProjectItem title={"Calculator"} image={require("../assets/img/calculator.png")} repo={"#"} site={"#"}/>
        
        <ProjectItem title={"Man With a Spade"} image={require("../assets/img/mws.png")} repo={"#"} site={"#"}/>
        
        <ProjectItem title={"Cactus Connoiseur"} image={require("../assets/img/cactus.png")} repo={"#"} site={"#"}/>
        
        <ProjectItem title={"Exercise Survery Form"} image={require("../assets/img/survey.png")} repo={"#"} site={"#"}/>
        
        <ProjectItem title={"Income Tracker"} image={require("../assets/img/incomeblur4.png")} repo={"#"} site={"#"}/>
    </>;
}