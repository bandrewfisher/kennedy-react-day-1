import Button from "./Button";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const [var1, var2, var3] = ["cat", "dog", "Mouse"];

const { name } = { name: "Jeff" };

const myList = [1, 2, 3];
const myListClone = [...myList];

// myList [1, 2, 3]
myListClone[0] = 4; // [4, 2, 3]

function myFunc(callbackFunc: (arg: number) => void) {
  callbackFunc(2);
}

// UseState
// 1. Array destructuring - [0] is value, [1] function that changes the value
// 2. Always use the function when changing state
// 3. When state changes, the component function gets called again

myFunc((num) => console.log("your number is" + num));

// function myAwesomeFunction(arg1, arg2) {
//   ...
// }

function foo(argument1: string) {}

// console.log(argument1);

// Every time a reactive piece gets changed, the whole
// function gets called again
function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [todoList, setList] = useState(["feed the cat", "do the dishes"]);
  const showTime = true;

  const addNewItem = (newItem: string) => {
    setList([...todoList, newItem]);
  };

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    setCount(count - step);
  };

  const changeStep = (newStep: number): void => {
    setStep(newStep);
  };

  const logSomething = (message: string) => {
    console.log("hello " + message);
  };

  const renderTime = () => {
    if (showTime) {
      return "The time is 12";
    }
  };

  return (
    <div>
      {count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br />
      <input
        value={step}
        onChange={(event) => {
          // event.target.value  // what we typed
          changeStep(Number(event.target.value));
        }}
      />
      <Button text="Awesome button" onClick={logSomething}></Button>{" "}
      {/* Always capitalize custom components */}
      <Button
        text="Super cool button"
        color="red"
        onClick={(message) => console.log(message)}
      ></Button>
      <Button text="Boring button" onClick={logSomething}></Button>
      <ul>
        {todoList.map((item) => {
          return (
            <Button text={item} onClick={logSomething} key={item}></Button>
          );
        })}
      </ul>
      {showTime && "The time is 12:00 pm"}
      {renderTime()} {/* same thing */}
    </div>
  );
}

let time = "midnight";
let student = "Kennedy";

// short circuiting - when you reach a false, quit
if (time === "noon" && student === "Kennedy") {
  //short circuiting
  console.log("Hey, its noon");
}

const numbers = [1, 2, 3, 4];
console.log(numbers.map((num) => "my numbers is " + num));

// map returns a new array
// map: accepts a callback function that gets called with each value of the list, in order

export default App;
