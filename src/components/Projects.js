import { MdLockClock } from "react-icons/md";
import ProjectItem from "./ProjectItem";
export default function Projects(){
    return <>
        <div id="project-item-grid-container">
          
                <ProjectItem className="cl" title={"Calculator"} image={require("../assets/img/calculator.png")} repo={"https://github.com/AkaraTawng/Calculator"} site={"#"}/>
                
                <ProjectItem className="mws" title={"Man With a Spade"} image={require("../assets/img/mws.png")} repo={"https://github.com/AkaraTawng/man-with-a-spade"} site={"#"}/>
         
                <ProjectItem className="cc" title={"Cactus Connoiseur"} image={require("../assets/img/cactus.png")} repo={"https://github.com/AkaraTawng/product-landing-page"} site={"#"}/>
           
                <ProjectItem className="sf" title={"Exercise Survery Form"} image={require("../assets/img/survey.png")} repo={"https://github.com/AkaraTawng/survey-form"} site={"#"}/>
               
                <ProjectItem className="cp" title={"Checkout Page"} image={require("../assets/img/checkoutpage.png")} repo={"https://github.com/AkaraTawng/checkout-page-dev-io.git"} site={"https://checkout-page-chris-chamberlain-devio.netlify.app/"}/>
               
                <ProjectItem className="rp" title={"Recipe Page"} image={require("../assets/img/recipepage.png")} repo={"https://github.com/AkaraTawng/recipe-blog-challenge-dev-io.git"} site={"https://recipe-blog-challenge-dev-io.netlify.app/"}/>
               
                <ProjectItem className="rp" title={"Interior Design Landing Page"} image={require("../assets/img/interiordesign.png")} repo={"https://github.com/AkaraTawng/interior-design-consultant-devio.git"} site={"https://interior-design-devio-chrischam.netlify.app/"}/>
               
                <ProjectItem className="rp" title={"Team Page"} image={require("../assets/img/teampage.png")} repo={"https://github.com/AkaraTawng/my-team-page-devio.git"} site={"https://my-team-page-chris-cham.netlify.app/"}/>
        
            </div>

                <ProjectItem className="it" title={"Income Tracker"} image={require("../assets/img/incomeblur4.png")} repo={"#"} viewrepo={<MdLockClock/>} viewsite={<MdLockClock/>} site={"#"}/>
    </>;
}