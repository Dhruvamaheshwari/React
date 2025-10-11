// ⁡⁢⁢⁢click event⁡ =⁡⁢⁣⁣ An iteraction when a user clicks on a specific element.⁡
//             ⁡⁢⁣⁣  We can respond to click by passing⁡
//             ⁡⁢⁣⁣  a callback to the onClick event handler⁡

function Button()
{
    // const handleClick = () => console.log("OUCH!!");
    // return(<button onClick={handleClick}>Click me</button>)


    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);
    // return(<button onClick = { () => handleClick2("Dhruva Maheshwari")}>Click me</button>)


    // let count = 0;
    // const handleClick = (name) =>{
    //     if(count < 3)
    //     {
    //         count++;
    //         console.log(`${name} you clicked me ${count} times/s`);
    //     }
    //     else{
    //         console.log(`${name} stop clicking me`);
    //     }
    // }
    // return(<button onClick={() => handleClick("bro")}>Click me</button>)

    const handleClick = (e) => e.target.textContent = "Ouch "
    return (<button onDoubleClick={(e) => handleClick(e)}>Click me</button>)

}



export default Button