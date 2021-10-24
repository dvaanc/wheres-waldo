import React from 'react';
import { Game } from "../styles/GameStyle";
import level1 from "../assets/level1.jpg";
import DropDownComponent from "./DropDownComponent";
export const GameComponent:React.FC = () => {
  const [XOffset, setXOffset] = React.useState(0);
  const [YOffset, setYOffset] = React.useState(0);
  const [display, setDisplay] = React.useState("none");
  const [toggleDropDown, setToggleDropDown] = React.useState(false);
  const handleClick = (e: any): void => {
    const X = e.pageX;
    const Y = e.pageY;
    setXOffset(X);
    setYOffset(Y);
    if(!toggleDropDown) {
      setDisplay("block");
      setToggleDropDown(true);
    }
    if(toggleDropDown) {
      setDisplay("none");
      setToggleDropDown(false);
    }
  }
  return (
    <Game>
      <img draggable='false' onClick={handleClick} src={level1} alt='game'/>
      <DropDownComponent X={XOffset} Y={YOffset} display={display}/>
    </Game>
  )
}