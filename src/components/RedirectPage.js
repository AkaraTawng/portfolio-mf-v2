
//hooks
import { useEffect, useState } from "react";
import { useMatch } from "react-router-dom";

//pages
import Loader from "./Loader";

export default function RedirectPage() {
    const [isLoading, setIsLoading] = useState(true);
    const matchLinkedin = useMatch("/linkedin");
    const matchGithub = useMatch("/github");
    const matchResume = useMatch("/resume");
    
        useEffect(() => {
        if(matchLinkedin){
            window.location.replace("https://www.linkedin.com/feed/");
        } else if(matchGithub){
            window.location.replace("https://github.com/AkaraTawng");
        } else if(matchResume){
            window.location.replace("#");
        }
        setIsLoading(false);
    },[]);

    return <Loader/>;
}