
//hooks
import { useEffect, useState } from "react";
import { useMatch } from "react-router-dom";

//pages
import Loader from "./Loader";

export default function RedirectPage() {
    const [isLoading, setIsLoading] = useState(true);
    const match = useMatch();
    console.log(match);


    {isLoading && <Loader/>}
    return useEffect(() => {
        window.location.replace("https://www.linkedin.com/feed/");
        setIsLoading(false);
    },[]);
}