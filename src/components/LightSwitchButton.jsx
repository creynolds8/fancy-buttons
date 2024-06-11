import { useState } from "react";

export default function LightSwitchButton(props) {
  // const [ light, setLight ] = useState('off');
  const handleClick = () => props.setLight(props.light === 'off' ? 'on' : 'off')

  return (
    <button className="LightSwitchButton" onClick={handleClick}>
      {props.light === "on" && <span><i>💡</i> I'm on!</span>}
      {props.light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}
