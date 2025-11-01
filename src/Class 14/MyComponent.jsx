import { useState } from "react";

function MyComponent()
{
    const [car , setCar] = useState([]);
    const [carYear , setCarYear] = useState(new Date().getFullYear());
    const [carMake , setCarMake] = useState("")
    const [carModel , setCarModel] = useState("");


    const handleAddCar = () => {

        //! make a object;
        const newCar = {year: carYear , 
                        make:carMake , 
                        Model:carModel}; //? this is J.S object

        //! add a new car;
        setCar(car => [...car , newCar]);
        
        //! data reset;
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    const handleRemoveCar = (index) => {
        setCar(car => car.filter((_,i) => i !== index));
    }

    const handlYearChange = (e) => { setCarYear(e.target.value); }
    const handlMakeChange = (e) => { setCarMake(e.target.value); }
    const handleModelChange = (e) => { setCarModel(e.target.value); }

    return(
        <div>
            <h2 className="text-2xl font-bold m-2">list of the car object</h2>
              <ul className="list-disc m-10">
                 {car.map((element , index) => <li key={index} onClick={()=>handleRemoveCar(index)} >{element.year} {element.make} {element.Model}</li>)}
              </ul>
              <input className="border-2 m-2" type="number" value={carYear} onChange={handlYearChange} />
              <br />
              <input className="border-2 m-2" type="text" value={carMake} onChange={handlMakeChange} placeholder="enter car Make" />
              <br />
              <input className="border-2 m-2" type="text" value={carModel} onChange={handleModelChange} placeholder="enter car Model" />
              <br />
              <button className="border-2 ml-2 rounded-md w-20 cursor-pointer bg-gray-300 hover:bg-gray-400" onClick={handleAddCar}>Add Car </button>
        </div>
    )
}

export default MyComponent