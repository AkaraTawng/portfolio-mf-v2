import ProjectItem from "./ProjectItem";
export default function Projects(){
    return <>
        <ProjectItem title={"Calculator"} image={require("../assets/img/calculator.png")} repo={"#"} site={"#"}/>
        
        <ProjectItem title={"Man With a Spade"} image={require("../assets/img/mws.png")} repo={"#"} site={"#"}/>
    </>;
}