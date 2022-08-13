
import Loader from "./Loader";
import {useEffect, useState} from "react";
export default function RedirectPage() {
    const [isLoading, setIsLoading] = useState(true);
    {isLoading && <Loader/>}
    return useEffect(() => {
        window.location.replace("https://www.linkedin.com/feed/");
        setIsLoading(false);
    },[]);
}