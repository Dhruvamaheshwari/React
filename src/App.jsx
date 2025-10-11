/** @format */

// import Header from "./Class 1/Header.jsx"
// import Footer from "./Class 1/Footer.jsx";
// import Food from "./Class 1/Food.jsx";
// import Card from "./Class 2/Card";
// import Button from "./Class 3/Button";
// import Student from "./Class 4/Student";
// import UserGreeting from "./Class 5/UserGreeting";
// import List from "./Class 6/List";
// import List2 from "./Class 6/List2";
// import Button from "./Class 7/Button";
// import ProfilePicture from "./Class 7/ProfilePicture";
// import  Counter  from "./Class 8/Counter";
// import MyComponent from "./Class 8/MyComponent";
// import MyComponent from "./Class 9/MyComponent";
// import ColorPicker from "./Class 10/ColorPicker";
// import Counter from "./Class 11/Counter";
// import MyComponent from "./Class 12/MyCoponent";
// import ArrayComponent from "./Class 13/ArrayCmponent";
// import MyComponent from "./Class 14/MyComponent";
import ToDoList from "./Class 15/ToDoList";

function App() {
  //? ---------------- ⁡⁢⁣⁢class 6⁡

  //   const fruits = [
  //     { id: 1, name: "apple", calories: 95 },
  //     { id: 2, name: "mango", calories: 100 },
  //     { id: 3, name: "banana", calories: 10 },
  //     { id: 4, name: "pineapple", calories: 20 },
  //   ];

  //   const vegetable = [
  //     { id: 5, name: "patato", calories: 115 },
  //     { id: 6, name: "onion", calories: 15 },
  //     { id: 7, name: "carrot", calories: 64 },
  //     { id: 8, name: "corn", calories: 50 },
  //   ];

  return (
    <>
      {/* ------ ⁡⁢⁣⁢class 1⁡
    <Header />
    <Footer></Footer>
    <Food /> */}

      {/* ------ ⁡⁢⁣⁢class 2⁡
    <Card />
    <Card />
    <Card />
    <Card /> */}

      {/*  ---- ⁡⁢⁣⁢class 3⁡
      <Button/> */}

      {/* ----- ⁡⁢⁣⁢class 4⁡
        <Student name="Dhruva Maheshwari" age={30} isStudent={true}/>
        <Student name="Sayoun" age={32} isStudent={false}/>
        <Student name="pranav" age={400} isStudent={false}/>
        <Student name="Muskan" age={28} isStudent={true}/>
        <Student/> */}

      {/* ------ ⁡⁢⁣⁢class 5⁡
       <UserGreeting isLoggedIn={true} username={"Dhruva Maheshwari"} /> */}

      {/* ------ ⁡⁢⁣⁢class 6 ⁡
      <List />
      {fruits.length > 0 ? <List2 item={fruits} category="fruit" /> : null}
      {vegetable.length > 0 ? <List2 item={vegetable} category="vegetable" />:null}

      //? --------------------- OR ---------------------------

      {fruits.length > 0 && <List2  category="fruit" /> };
      {vegetable.length > 0 && <List2 item={vegetable} category="vegetable" /> }; */}

      {/* ------- ⁡⁢⁣⁢class 7⁡  
        <Button/> 
        <ProfilePicture/> */}


      {/*  ------- ⁡⁢⁣⁢class 8⁡
        <MyComponent/>
        <Counter /> */}

      {/*  ------- ⁡⁢⁣⁢class 9⁡
        <MyComponent/> */}

      {/* ------- ⁡⁢⁣⁢class 10⁡
         <ColorPicker/> */}

         {/* ----- ⁡⁢⁣⁢class 11⁡
         <Counter/> */}

         {/* ------ ⁡⁢⁣⁢class 12⁡
          <MyComponent/> */}

          {/*  ------ ⁡⁢⁣⁢class 13⁡
          <ArrayComponent/> */}

        {/*  -------- ⁡⁢⁣⁢class 14⁡
        <MyComponent/> */}

        <ToDoList/>

    </>
  );
}
export default App;
 