import { Link } from "react-router-dom";
export default function ProjectItem(props) {
    return <>
    <div id="project-item-container-outer">
        <h2>{props.title}</h2>
        <div id="project-item-container-inner">
            <img src={props.image} />
        </div>

        <div id="links-flex-container">
            <div id="view-repo"><a href={props.repo}>View Repo</a></div>
            <div id="view-site"><a href={props.site}>View Site</a></div>
        </div>
    </div>
    </>;
}