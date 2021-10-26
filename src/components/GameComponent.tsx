import React from 'react';
import { Game, Wrong, Target, ImageWrapper } from "../styles/GameStyle";
import level1 from "../assets/level1.jpg";
import DropDownComponent from "./DropDownComponent";
export const GameComponent:React.FC = () => {
  const [XOffset, setXOffset] = React.useState(0);
  const [YOffset, setYOffset] = React.useState(0);
  const [display, setDisplay] = React.useState("none");
  const [toggleDropDown, setToggleDropDown] = React.useState(false);
  const [levelDimension, setLevelDimension] = React.useState({

  })
  const levelRef = React.useRef<HTMLImageElement>(null);
  React.useEffect(() => {
    if(levelRef.current) {
      setLevelDimension({
        x: 82 ,
        y: 92 ,
      })
    }
  }, [])
  // React.useEffect(() => {
  //   const val = async() => {
  //     // @ts-ignore: Object is possibly 'null'.
  //     if(levelRef.current) {
  //       await setLevelDimension({
  //         x: levelRef.current.clientHeight / 100,
  //         y: levelRef.current.clientWidth / 100,
  //       })
  //       console.log(levelDimension);
  //     }
  //   }
  //   window.addEventListener('resize', val )
  //   return () => window.removeEventListener('resize', val)
  // })
  const handleClick = (e: any): void => {
    const { offsetX: X, offsetY: Y } = e.nativeEvent;
    console.log(X, Y);
    console.log(levelRef.current?.clientHeight)
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
  // const getVal = (e: any): void => {
  //   console.log(e.target.offsetHeight);
  //   console.log(e.target.offsetWidth);
  //   const { offsetHeight: x, offsetWidth: y } = e;
  //   setLevelDimension({
  //     x,
  //     y,
  //   })
  // }
  return (
    <Game>
      <Wrong opacity={1}>Wrong! Try again</Wrong>
      <img ref={ levelRef } draggable='false'  onClick={handleClick} src={level1} alt='game'/>
      <DropDownComponent X={XOffset} Y={YOffset} display={display}/>
      <Target top={(levelDimension as any).y} left={(levelDimension as any).x} currentColour="rgb(71, 250, 0);" />
    </Game>
  )
}