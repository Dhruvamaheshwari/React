
import { useState } from "react";

function ArrayComponent() {
    const [food, setFood] = useState(["mango", "Apple", "papaya"]);

    return (<div className="m-4">
        <h2 className="text-3xl m-2">List of food</h2>
        <ul className="list-disc p-3 m-2">
            {food.map((food, index) => <li key={index}> {food}</li>)}
        </ul>
    </div>)
}

export default ArrayComponent;