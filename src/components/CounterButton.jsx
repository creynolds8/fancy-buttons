import { useState } from "react";

export default function CounterButton(props) {
  const [ clickAmount, setClickAmount ] = useState(0);
  const handleClick = () => {
    setClickAmount(clickAmount + 1);
    props.increaseAnger(0.1);
  }
  return (
    <button className="CounterButton" onClick={handleClick}>
    You clicked me {clickAmount} times
    </button>
  );
}