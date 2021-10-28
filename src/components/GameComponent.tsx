import React from 'react';
import { Game, Wrong } from "../styles/GameStyle";
import level1 from "../assets/level1.jpg";
import DropDownComponent from "./DropDownComponent";
import { fetchData } from './firestore';
export const GameComponent:React.FC = () => {
  const [XOffset, setXOffset] = React.useState(0);
  const [YOffset, setYOffset] = React.useState(0);
  const [display, setDisplay] = React.useState("none");
  const [toggleDropDown, setToggleDropDown] = React.useState(false);
  const [screenSize, setScreenSize] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })
  const imgRef =  React.useRef<HTMLImageElement>(null);
  const charList = fetchData();
  React.useEffect(() => {
    const handleResize = (e: any) => {
      console.log('Height: ' + window.innerHeight, 'Width: ' + window.innerWidth )
      setScreenSize({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const isCharAtCoords = async(X: number, Y: number) => {
    console.log(X, Y);
    const index = (await charList).find((item) => {
      return item.id === 'staticSize'
    });
    console.log(index);
    const scaledX = 
    (await charList).some((char) => {
      
    })
  }
  const handleClick = (e: any): void => {
    const { offsetX: X, offsetY: Y } = e.nativeEvent;
    console.log(`
    Mouse X: ${X},  Mouse Y: ${Y}`);
    console.log(`
    Client height: ${imgRef.current?.clientHeight}, Client width: ${imgRef.current?.clientWidth}`)
    setXOffset(X + 25);
    setYOffset(Y - 80 );
    toggleDropDownMenu();
    isCharAtCoords(X, Y);
  }
  const handleScroll = (e: any): void => {

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
      <Wrong opacity={1}>Wrong! Try again</Wrong>
      <img ref={ imgRef } draggable='false' onClick={handleClick} onScroll={handleScroll} src={level1} alt='game'/>
      <DropDownComponent X={XOffset} Y={YOffset} display={display}/>
    </Game>
  )
}
