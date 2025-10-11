/** @format */

function List() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "mango", calories: 100 },
    { id: 3, name: "banana", calories: 10 },
    { id: 4, name: "pineapple", calories: 20 },
  ];

  // fruits.sort((a , b) => a.name.localeCompare(b.name));  //* Alphabetical Order
  // fruits.sort((a , b) => b.name.localeCompare(a.name));  //* Reverse Alphabetical Order
  // fruits.sort((a,b) => a.calories - b.calories);         //* Numeric order
  // fruits.sort((a,b) => b.calories - a.calories);         //* Reverse Numeric order

  // const lowCalFoods = fruits.filter(fruit => fruit.calories < 50);
  // const lowCalFoods = fruits.map((fruit) =>   <li key = {fruit.id}>
  //                                         {fruit.name} : &nbsp;
  //                                         <b>{fruit.calories}</b>
  //                                     </li>);
  // const HighCalFood = fruits.filter(fruit => fruit.calories > 50);
  // const HighCalFood = fruits.map((fruit) =>   <li key = {fruit.id}>
  //                                         {fruit.name} : &nbsp;
  //                                         <b>{fruit.calories}</b>
  //                                     </li>);

  const listItems = fruits.map((fruit) => (
                                            <li key={fruit.id}>
                                                {fruit.name} : &nbsp;
                                                <b>{fruit.calories}</b>
                                            </li>
                                            ));

  return <ol>{listItems}</ol>;
}

export default List;
