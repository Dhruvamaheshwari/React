/** @format */

import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState();
  const [age, setAge] = useState(2);
  const [isStudent, setIsStudent] = useState(false);

  const updateName = () => {
    // name = "bro"; //! ye bs consol me update krta h
    // console.log(name);
    setName("bro"); //* pr ye browser pe bhi show krta h update ke saath
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const updateStudent = () => {
    setIsStudent(!isStudent);
  }

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Set Age</button>

      <p>Student: {isStudent ? "yes" : "no"}</p>
      <button onClick={updateStudent}>Set Age</button>
    </div>
  );
}

export default MyComponent;
