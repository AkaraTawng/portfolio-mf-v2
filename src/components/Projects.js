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
                
                 <ProjectItem className="ep" title={"Edie Landing Page"} image={require("../assets/img/edie-landing-page.png")} repo={"https://github.com/AkaraTawng/eddie-homepage-devio.git"} site={"https://eddie-homepage.netlify.app/"}/>
                
                <ProjectItem className="cp" title={"Checkout Page"} image={require("../assets/img/checkoutpage.png")} repo={"https://github.com/AkaraTawng/checkout-page-dev-io.git"} site={"https://checkout-page-chris-chamberlain-devio.netlify.app/"}/>
               
                 <ProjectItem className="inde" title={"Interior Design Landing Page"} image={require("../assets/img/interiordesign.png")} repo={"https://github.com/AkaraTawng/interior-design-consultant-devio.git"} site={"https://interior-design-devio-chrischam.netlify.app/"}/>

                <ProjectItem className="rp" title={"Recipe Page"} image={require("../assets/img/recipepage.png")} repo={"https://github.com/AkaraTawng/recipe-blog-challenge-dev-io.git"} site={"https://recipe-blog-challenge-dev-io.netlify.app/"}/>
               
                <ProjectItem className="tp" title={"Team Page"} image={require("../assets/img/teampage.png")} repo={"https://github.com/AkaraTawng/my-team-page-devio.git"} site={"https://my-team-page-chris-cham.netlify.app/"}/>

                <ProjectItem className="cl" title={"Calculator"} image={require("../assets/img/calc2.png")} repo={"https://github.com/AkaraTawng/Calculator"} site={"#"}/>
                
                <ProjectItem className="mws" title={"Man With a Spade"} image={require("../assets/img/mws.png")} repo={"https://github.com/AkaraTawng/man-with-a-spade"} site={"#"}/>
         
                <ProjectItem className="cc" title={"Cactus Connoiseur"} image={require("../assets/img/cactus.png")} repo={"https://github.com/AkaraTawng/product-landing-page"} site={"#"}/>
           
                <ProjectItem className="sf" title={"Exercise Survery Form"} image={require("../assets/img/survey.png")} repo={"https://github.com/AkaraTawng/survey-form"} site={"#"}/>
            </div>

            <ProjectItem className="it" title={"Income Tracker"} image={require("../assets/img/incomeblur4.png")} repo={"#"} viewrepo={<MdLockClock/>} viewsite={<MdLockClock/>} site={"#"}/>
    </AnimatedPage>
    </>;
}