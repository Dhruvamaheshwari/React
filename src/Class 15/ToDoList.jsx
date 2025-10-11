
import { useState } from "react"


function ToDoList() {

    const [Task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };


    const AddTask = () => {
        if (newTask.trim() !== '') {
            setTask(Task => [...Task, newTask]);
            setNewTask("");
        }

    };


    const RemoveTask = (index) => {
        const updateTask = Task.filter((_, i) => i !== index);
        setTask(updateTask);
    };


    const MoveTaskUp = (index) => {
        if(index > 0){
            const updateTask = [...Task];
            [updateTask[index] , updateTask[index-1]] = [updateTask[index - 1] , updateTask[index]];
            setTask(updateTask);
        }
     };


    const MoveTaskDown = (index) => {
        if(index < Task.length-1){
            const updateTask = [...Task];
            [updateTask[index],updateTask[index + 1]] = [updateTask[index+1] , updateTask[index]]
            setTask(updateTask);
        }
     };



    return (
        <div className="flex flex-col m-5 justify-center items-center">
            <h1 className="text-5xl font-bold ">Todo List</h1>
            <div className="mt-20">
                <input
                    type="text"
                    placeholder="Enter a Task"
                    value={newTask}
                    onChange={handleInputChange}
                    className="border-2 rounded-lg ml-5 w-50 h-10 text-lg mt-5 pl-2"
                />

                <button className="m-3 border-2 ml-2 rounded-md w-20 cursor-pointer bg-gray-300 hover:bg-green-600 "
                    onClick={AddTask}>
                    Add
                </button>

                <ol>
                    {Task.map((element, index) => <li
                        className="border-3 m-2  rounded-lg p-1"
                        key={index}><span className="font-bold p-2">{element}</span>
                        <button className="m-3 border-2 ml-2 rounded-md w-20 cursor-pointer bg-gray-300 hover:bg-red-500 " onClick={() => RemoveTask(index)}>Delete</button>
                        <button className="m-3 border-2 ml-2 rounded-md w-20 cursor-pointer bg-gray-300 hover:bg-blue-400" onClick={() => MoveTaskUp(index)}>UP</button>
                        <button className="m-3 border-2 ml-2 rounded-md w-20 cursor-pointer bg-gray-300 hover:bg-orange-300" onClick={() => MoveTaskDown(index)}>Down</button>
                    </li>)}
                </ol>
            </div>
        </div>
    );
}

export default ToDoList