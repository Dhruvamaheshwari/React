import { useState } from "react";

function ColorPicker() {
    const [color, setColor] = useState("#e2dada")

    const handleColorChange = (e) => { setColor(e.target.value) }


    return (
        <div className=" flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mt-50 font-sans">Color Picker</h1>
            <div className=" min-h-100 flex flex-col items-center border-4 w-1/4  m-5  rounded-lg  justify-center">
                <div className="h-70 w-60 border-2 rounded-lg text-center font-bold text-2xl pt-25" style={{ backgroundColor: color }}>
                    <p>Selected Color: {color}</p>
                </div>

                <label className="text-lg font-bold">Select a Color: </label>
                <input type="color" value={color} onChange={handleColorChange} />


            </div>
        </div>
    );
}

export default ColorPicker