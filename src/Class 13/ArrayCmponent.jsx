
import { useState } from "react";

function ArrayComponent() {
    const [food, setFood] = useState(["mango", "Apple", "papaya"]);

    const handleAddFood = () => {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = '';
        setFood(food => [...food, newFood])
    }

    const handleRemoveFood = (index) =>{
        setFood(food.filter((_, i)=> i!==index));
    }

    return (<div className="m-4">
        <h2 className="text-3xl m-2">List of food</h2>

        <ul className="list-disc p-3 m-2">
            {food.map((food, index) => 
                <li key={index} onClick={()=>handleRemoveFood(index)}> 
                    {food}
                </li>)}
        </ul>

        <input className="border-2" type="text" id="foodInput" placeholder="enter food name" />
        <button className="border-2 ml-2 rounded-md w-20 cursor-pointer bg-gray-300 hover:bg-gray-400" onClick={handleAddFood}>Add food</button>
    </div>)
}

export default ArrayComponent;