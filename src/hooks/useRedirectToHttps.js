import {useEffect} from 'react';
import {useLocation} from "react-router";

const UseRedirectToHttps = () => {
    let location = useLocation()
    const hostname = window.location.hostname

    useEffect(() => {
        
        if (window.location.protocol!=="https:" && hostname !== 'localhost') {
            window.location.replace("https://www.andrewmichaelgay.com"+location.pathname);
        }
    })
};

export default UseRedirectToHttps;