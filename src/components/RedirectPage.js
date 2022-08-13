
import {useEffect} from "react";
export default function RedirectPage() {
    return useEffect(() => {
        window.location.replace("https://www.linkedin.com/feed/");
    },[]);
}