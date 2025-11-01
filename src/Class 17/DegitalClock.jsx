
import { useEffect, useState } from "react";

function DegitalClock()
{

    const [time , setTime] = useState(new Date());

    useEffect(() =>{

        const intervelId = setInterval(()=>{
            setTime(new Date());
        },1000);


        return () => {
            clearInterval(intervelId);
        }
    },[]);

    const formateTime = () => {
        let hour = time.getHours();
        const minutes = time.getMinutes();
        const second = time.getSeconds();
        const meridiem = hour >= 12 ? "PM" : "AM";
        hour = hour % 12 || 12;
        return (`${padZero(hour)} : ${padZero(minutes)} : ${padZero(second)} ${meridiem}`);
    }

    function padZero(number)
    {
         return (number < 10 ? "0" : "")+number;
    }

    return(
        <div className="flex justify-center min-h-screen items-center blur-[1.5px]">
                <span className="font-bold text-8xl font-mono ">{formateTime()}</span>
        </div>
        );
}

export default DegitalClock;