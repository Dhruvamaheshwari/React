import { useState , useEffect , useRef } from "react";

function MyComponent()
{
    // let [number , setNumber] = useState(0);
    const inputRef = useRef(null);


    useEffect(()=>{
        console.log("Componenet Render");
        console.log(inputRef); 
    });

    const handleClick = () =>{
        // setNumber(n => n + 1);
         
        ref.current = ref.current + 1;
        console.log(ref.current)
    }

    return(
        <div>
            <button onClick={handleClick}>
                Click Me:
            </button>
            <input ref={inputRef}/>
        </div>
    )
}

export default MyComponent;