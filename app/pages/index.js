import { useLayoutEffect } from "react";
import Home from "../components/Home";


export default function IndexPage() { 
    // useLayoutEffect(() => {
    //     window.scrollTo(0, 0)
    // }, []);
    return (
       <div>
        <Home />
       </div>
    )
}