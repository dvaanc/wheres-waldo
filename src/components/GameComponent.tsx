import React from 'react';
import { Game, Wrong, Target } from "../styles/GameStyle";
import level1 from "../assets/level1.jpg";
import DropDownComponent from "./DropDownComponent";
export const GameComponent:React.FC = () => {
  const [XOffset, setXOffset] = React.useState(0);
  const [YOffset, setYOffset] = React.useState(0);
  const [display, setDisplay] = React.useState("none");
  const [toggleDropDown, setToggleDropDown] = React.useState(false);
  // React.useEffect(() => {
  //   console.log(XOffset, YOffset)
  // }, [XOffset, YOffset])
  const handleClick = (e: any): void => {
    const { clientX: X, clientY: Y } = e;
    setXOffset(X + 25);
    setYOffset(Y - 80 );
    toggleDropDownMenu();
  }
  const toggleDropDownMenu = () => {
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
      <Wrong opacity={0}>Wrong! Try again</Wrong>
      <img draggable='false' onClick={handleClick} src={level1} alt='game'/>
      <DropDownComponent X={XOffset} Y={YOffset} display={display}/>
      <Target currentColour="rgba(255, 0, 0, 0.6);" style={{ top: 550, left: 450}}/>
    </Game>
  )
}