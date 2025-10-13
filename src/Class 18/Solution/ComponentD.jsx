
import {useContext} from "react"
import { UserContext } from "./ComponentA"

function ComponenetD(pro)
{
    const user = useContext(UserContext);
    return(
        <div className="border-2 m-5 p-3 ">
            <h1 className="text-2xl">ComponenetD</h1>
            <h2>{`Bye: ${user}`}</h2>
        </div>
    )
}

export default ComponenetD