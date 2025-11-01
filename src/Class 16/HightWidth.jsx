
import { useState, useEffect } from "react"

function HightWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);


    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("event listener add");
   
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("event listener removed");
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width}  ${height}`;
    }, [])

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }



    return (<>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    </>)
}


export default HightWidth