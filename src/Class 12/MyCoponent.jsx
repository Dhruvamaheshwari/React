import { useState } from "react";

function MyComponent()
{
    const [car , setCar] = useState({year: 2024,
                                    make: "B.M.W",
                                    model: "l30"});
    
    function handleYearChange(e){
        setCar(car => ({...car , year: e.target.value}));
    }

    function handleMakeChange(e)
    {
        setCar(car => ({...car , make: e.target.value}));
    }

    function handleModelChange(e)
    {
        setCar(car =>({...car , model: e.target.value}));
    }

    
    return(
        <div>
            <p>Your favorite car is: {car.year} {car.make} {car.model} </p>

            <input className="border-2" type="number" value={car.year} onChange={handleYearChange} />
            <br />
            <input className="border-2" type="text" value={car.make} onChange={handleMakeChange}/>
            <br />
            <input className="border-2" type="text" value={car.model} onChange={handleModelChange}/>
        </div>
    )
}

export default MyComponent;