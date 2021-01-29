// A component is a piece of UI

// REACT IS JUST JAVASCRIPT

// { } in JSX - any valid Javascript

interface Cat {
  name: string;
  color?: string;
}

let calico: Cat = {
  name: "Garfield",
  color: "orange",
};

interface ButtonProps {
  text: string;
  color?: "default" | "red";
  onClick: (message: string) => void;
}

const Button = ({ text, color, onClick }: ButtonProps) => {
  const buttonColor = color === "red" ? "red" : "gray";

  return (
    <button
      onClick={() => onClick("Brett")}
      style={{ backgroundColor: buttonColor }}
    >
      {text + "!"}
    </button>
  );
};

// React dev tools


interface ChangeEvent {
  target: {
    value: string   // What you typed in the box
  };
}

interface InputProps {
  onChange: (event: ChangeEvent) => void;
}
const Input = ({ onChange }: InputProps) => {
  return <input onChange={onChange}></input>
}

export default Button;
