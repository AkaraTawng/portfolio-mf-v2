
//hooks
import { useEffect } from "react";
import { useMatch } from "react-router-dom";

export default function RedirectPage(props) {
    const matchLinkedin = useMatch("/linkedin");
    const matchGithub = useMatch("/github");
    const matchResume = useMatch("/resume");

       useEffect(() => {
        props.setIsLoading(true)
        if(matchLinkedin){
            window.location.replace("https://www.linkedin.com/feed/");
        } else if(matchGithub){
            window.location.replace("https://github.com/AkaraTawng");
        } else if(matchResume){
            window.location.replace("https://drive.google.com/file/d/1okibSX_hHDyjqFiHQt5dhXAenBqEOxkc/view?usp=sharing");
        }
    },[]);   
}