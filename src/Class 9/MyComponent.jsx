import { useState } from "react";

function MyComponent()
{
    const [name , setName] = useState("");
    const [quntity , setQuentity] = useState();
    const [comment , setComment] = useState("");
    const [payment , setPyament] = useState("");
    const [shipping , setShippint] = useState("");

    function handleNameChange(e)
    {
        setName(e.target.value);
    }

    const handleQuntityChange = (e) => {setQuentity(e.target.value)}

    const handleCommentChange = (e) => {setComment(e.target.value)}

    const handlePaymetChange = (e) => {setPyament(e.target.value)}

    const handleShippingChange = (e) => {setShippint(e.target.value)}

    return(
        <div className="m-3">
            <input className="border-2" value={name} onChange={handleNameChange}/>
            <p>Name: {name} </p>

            <input className="border-2" value={quntity} onChange={handleQuntityChange} type="number" />
            <p>Quentity: {quntity}</p>

            <textarea className="border-2" value={comment} onChange={handleCommentChange}/>
            <p>Comment: {comment}</p>

            <select className="border-2" value={payment} onChange={handlePaymetChange}>
                <option value="">Select the option</option>
                <option value="U.P.I">U.P.I</option>
                <option value="Card">Card</option>
                <option value="Chash">Chash</option>
                <option value="GiftCard">GiftCard</option>
            </select>
            <p>payment: {payment}</p>

            <label>
                <input type="radio"  value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
                Pick Up
            </label>
<br />
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    ) 
}

export default MyComponent