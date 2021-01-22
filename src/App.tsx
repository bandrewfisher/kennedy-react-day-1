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

// Every time a reactive piece gets changed, the whole
// function gets called again
function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [list, setList] = useState(["feed the cat", "do the dishes"]);

  const addNewItem = (newItem: string) => {
    setList([...list, newItem]);
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

  return (
    <div>
      {count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br />
      <input
        value={step}
        onChange={({ target: { value } }) => {
          changeStep(Number(value));
        }}
      />
    </div>
  );
}

export default App;
