import React from 'react';
import { Game, Wrong } from "../styles/GameStyle";
import level1 from "../assets/level1.jpg";
import DropDownComponent from "./DropDownComponent";
import { fetchChars, fetchStaticDimensions } from './firestore';
export const GameComponent:React.FC = () => {
  const [XOffset, setXOffset] = React.useState(0);
  const [YOffset, setYOffset] = React.useState(0);
  const [display, setDisplay] = React.useState("none");
  const [toggleDropDown, setToggleDropDown] = React.useState(false);
  const [screenSize, setScreenSize]: any = React.useState({})
  const imgRef =  React.useRef<HTMLImageElement>(null);
  const charList = fetchChars();
  const staticDimensions: object = fetchStaticDimensions();
  
  React.useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const handleResize = async() => {
    setScreenSize({
      height: imgRef.current?.clientHeight,
      width: imgRef.current?.clientWidth,
    });
    console.log(imgRef.current?.clientHeight, imgRef.current?.clientWidth);
  };

  const handleClick = async(e: any) => {
    const { offsetX: X, offsetY: Y } = e.nativeEvent;
    await setScreenSize({
      height: imgRef.current?.clientHeight,
      width: imgRef.current?.clientWidth,
    })
    // console.log(`
    // Mouse X: ${X},  Mouse Y: ${Y}`);
    // console.log(`
    // Client height: ${imgRef.current?.clientHeight}, Client width: ${imgRef.current?.clientWidth}`)
    await setXOffset(X + 25);
    await setYOffset(Y - 80 );

    // toggleDropDownMenu();
    isCharAtCoords(X, Y);
  }

  const handleOnHandle = () => {

  }
  const isCharAtCoords = async(X: number, Y: number) => {
    console.log(staticDimensions)
    // const percentage: number = staticDimensions?.height / screenSize?.height;
    // const scaledX: number = X * percentage;
    // const scaledY: number = Y * percentage;
    // const sum: number = scaledX + scaledY;

    // (await charList).forEach((item) => {
    //   console.log(item.X + item.Y);
    //   console.log(sum);
    //   console.log('---------------------')
    //   if(sum <= ((item.X + item.Y) - 20) && sum >= ((item.X + item.Y) + 20)) {
    //     console.log(true);
    //   }
    // })
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
