
import {useEffect, useState} from "react";
export default function RedirectPage() {
    const [isLoading, setIsLoading] = useState(true);
    return useEffect(() => {
        window.location.replace("https://www.linkedin.com/feed/");
        setIsLoading(false);
    },[]);
}