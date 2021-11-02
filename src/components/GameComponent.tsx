import React from 'react';
import { Game, Wrong } from "../styles/GameStyle";
import level1 from "../assets/level1.jpg";
import DropDownComponent from "./DropDownComponent";
import { fetchCharsData, fetchStaticDimensions } from './firebase';

interface ScreenSize { height: number, width: number };
export const GameComponent:React.FC = () => {
  const [XOffset, setXOffset] = React.useState(0 as number);
  const [YOffset, setYOffset] = React.useState(0 as number);
  const [display, setDisplay] = React.useState("none" as string);
  const [toggleDropDown, setToggleDropDown] = React.useState(false);
  const [screenSize, setScreenSize] = React.useState({} as ScreenSize)
  const imgRef =  React.useRef<HTMLImageElement>(null);
  const charList = fetchCharsData();
  
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
    setScreenSize({ height: imgRef.current?.clientHeight!, width: imgRef.current?.clientWidth! })
    // console.log(`
    // Mouse X: ${X},  Mouse Y: ${Y}`);
    // console.log(`
    // Client height: ${imgRef.current?.clientHeight}, Client width: ${imgRef.current?.clientWidth}`)
    setXOffset(X + 25);
    setYOffset(Y - 80 );

    toggleDropDownMenu();
    isCharAtCoords(X, Y);
  }

  const handleOnHandle = () => {

  }
  const isCharAtCoords = async(X: number, Y: number) => {
    const staticDimensions: any = await fetchStaticDimensions().then((result) => result.data());
    const percentage: number = staticDimensions?.height / screenSize?.height;
    const sum: number = Math.round((X * percentage) + (Y * percentage));
    // console.log('SUM: ' + Number(sum));
    // console.log((await charList).some((item) => {
    //   const itemSum = item.X + item.Y;
    //   return (sum <= itemSum - 100 && sum >= itemSum + 100);
    // }));
    (await charList).forEach((item) => {
      const itemSum = item.X + item.Y;
      // console.log('------------')
      // console.log('ITEMSUM: ' + itemSum);
      if(sum <= (itemSum + item.radius) && sum >= (itemSum - item.radius)) {
        console.log(true);
      }
    })
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
      <DropDownComponent X={XOffset} Y={YOffset} display={display} checkForChar={ handleClick }/>
    </Game>
  )
}
