import React from 'react';
import { Game, Wrong } from "../styles/GameStyle";
import level1 from "../assets/level1.jpg";
import DropDownComponent from "./DropDownComponent";
import { fetchCharsData, fetchStaticDimensions, fetchServerTime } from './firebase';

interface ScreenSize { height: number, width: number };
interface Coords { X: number, Y: number };

export const GameComponent:React.FC = () => {
  const [XOffset, setXOffset] = React.useState(0 as number);
  const [YOffset, setYOffset] = React.useState(0 as number);
  const [display, setDisplay] = React.useState("none" as string);
  const [toggleDropDown, setToggleDropDown] = React.useState(false);
  const [screenSize, setScreenSize] = React.useState({} as ScreenSize);
  const [coords, setCoords] = React.useState({} as Coords);
  const [charFound, setCharFound] = React.useState('' as string);
  const [startTimer, setStartTimer] = React.useState(0 as number)
  const imgRef =  React.useRef<HTMLImageElement>(null);
  const charList = fetchCharsData();
  React.useEffect(() => {
    // start timer
    fetchServerTime();
    setStartTimer(fetchServerTime());
  }, [])
  React.useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const handleResize = async() => {
    setScreenSize({
      height: imgRef.current?.clientHeight!,
      width: imgRef.current?.clientWidth!,
    });
    // console.log(imgRef.current?.clientHeight, imgRef.current?.clientWidth);
  };

  const handleClick = (e: React.MouseEvent): void => {
    const { offsetX: X, offsetY: Y } = e.nativeEvent;
    setCoords({ X: X, Y: Y })
    setScreenSize({ height: imgRef.current?.clientHeight!, width: imgRef.current?.clientWidth! })
    // console.log(`
    // Mouse X: ${X},  Mouse Y: ${Y}`);
    // console.log(`
    // Client height: ${imgRef.current?.clientHeight}, Client width: ${imgRef.current?.clientWidth}`)
    setXOffset(X + 25);
    setYOffset(Y - 80 );
    toggleDropDownMenu();
  }
  const endGame = () => {
    console.log('game over')
    const endTime = fetchServerTime();
    const elapsedTime = Math.round((endTime - startTimer + Number.EPSILON ) * 100) / 100;
    console.log(elapsedTime)
  }
  const handleOnHandle = () => {

  }
  const isCharAtCoords = async(char: string) => {
    const staticDimensions: any = await fetchStaticDimensions().then((result) => result.data());
    const percentage: number = staticDimensions?.height / screenSize?.height;
    const sum: number = Math.round((coords.X * percentage) + (coords.Y * percentage));
    const item = (await charList).find((item) => item.id === char);
    const itemSum = item.X + item.Y;
    if(sum <= (itemSum + item.radius) && sum >= (itemSum - item.radius)) {
    console.log(char + ' found!');
    setCharFound(char);
    }

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
      <Wrong opacity={0}>Wrong! Try again</Wrong>
      <img 
      ref={ imgRef } 
      draggable='false' 
      onClick={ handleClick } 
      onScroll={ handleScroll } 
      src={level1} 
      alt='game'
      />
      <DropDownComponent 
      char={ charFound } 
      X={ XOffset } 
      Y={ YOffset } 
      display={ display } 
      checkForChar={ isCharAtCoords }
      endGame = { endGame }
      />
    </Game>
  )
}
