import { useState } from "react";

function MyComponent() {
    const [num, setnum] = useState(0);

    const incrementNum = () => {
        setnum(num => num + 1);
        setnum(num => num + 1);
        setnum(num => num + 1);
    }
    const decrementNum = () => {
        setnum(num => num - 1);
        setnum(num => num - 1);
        setnum(num => num - 1);
    }
    const resetNum = () => {
        setnum(num => num = 0);
    }

    return (
        <div className="flex flex-col justify-center min-h-screen items-center">
            <div className="border-4 w-1/3 h-20 m-10 rounded-2xl bg-sky-300 text-center p-2 text-5xl">{num}</div>

            <div>
                <button onClick={incrementNum} className="hover:bg-green-500 m-2 p-2 border-3 cursor-pointer rounded-lg bg-amber-300 h-20 w-60 font-bold text-2xl">Increment</button>
                <button onClick={resetNum} className="m-2 p-2 border-3 cursor-pointer rounded-lg bg-amber-300 h-20 w-60 font-bold text-2xl">Reset</button>
                <button onClick={decrementNum} className="hover:bg-red-500 m-2 p-2 border-3 cursor-pointer rounded-lg bg-amber-300 h-20 w-60 font-bold text-2xl">Decrement</button>
            </div>
        </div>
    )
}

export default MyComponent