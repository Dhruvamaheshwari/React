//* useEffect() = React Hook that tells React Do Some Code when (pick one):
//*               This Component re-renders
//*               This component mounts
//*               This state of a value


//* useEffect(function , [dependencies])

//* 1. useEffect( () => {} )   ⁡⁣⁢⁢// Runs after every re-render⁡
//* 2. useEffect( () => {} , [] )   ⁡⁣⁢⁢// Runs only on mount⁡
//* 2. useEffect( () => {} , [value] )   ⁡⁣⁢⁢// Runs only on mount + when value change⁡


//* USES
//* #1 Every Listeners
//* #2 DOM manipulation
//* #3 Subsription (real-time updates)
//* #4 Fetching Data from an API
//* #5 Clean up when a component unmounts


import { useState,useEffect } from "react";

function UseEffect()
{
    const [count , setCount] = useState(0);
    const [color , setColor] = useState("green");

    useEffect(()=>{
        document.title =`Count : ${count} ${color}`;
    },[color]);

    const addCount = () => {setCount(c => c + 1);};
    const subtractCount = () => {setCount(c => c - 1);};
    const changeColor = () => {setColor(c => c === "green" ? "red" : "green");};

    return(
        <>
        <p style={{color: color}}>Count: {count}</p>
        <button className="border-2" onClick={addCount}>Add</button>
        <button className="border-2" onClick={subtractCount}>Subtract</button>
        <br/>
        <button className="border-2" onClick={changeColor}>Change Color</button>
        </>
    )
}

export default UseEffect