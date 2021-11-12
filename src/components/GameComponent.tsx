import React from 'react';
import { Game, Wrong, Correct } from "../styles/GameStyle";
import level1 from "../assets/level1.jpg";
import DropDownComponent from "./DropDownComponent";
import GameOverComponent from './GameOver';
import { fetchCharsData, fetchStaticDimensions, fetchServerTime } from './firebase';

interface ScreenSize { height: number, width: number };
interface Coords { X: number, Y: number };

const GameComponent:React.FC = () => {
  // position the dropdown component on click
  const [XOffset, setXOffset] = React.useState(0 as number);
  const [YOffset, setYOffset] = React.useState(0 as number);
  // show dropdown on click
  const [display, setDisplay] = React.useState("none" as string);
  // boolean value for dropdown component to check if it should display
  const [toggleDropDown, setToggleDropDown] = React.useState(false);
  // record screensize on window resize 
  const [screenSize, setScreenSize] = React.useState({} as ScreenSize);
  const [coords, setCoords] = React.useState({} as Coords);
  const [charFound, setCharFound] = React.useState('' as string);
  const [reset, setReset] = React.useState(false as boolean);
  //
  const [startTimer, setStartTimer] = React.useState(0 as number);
  const [endTimer, setEndTimer] = React.useState(0 as number);
  const [modal, setModal] = React.useState(false as boolean);
  //wrong component
  const [showWrong, setShowWrong] = React.useState({ opacity: 0, char: '', });
  //correct component
  const [showCorrect, setShowCorrect] = React.useState({ opacity: 0, char: '', });
  const imgRef =  React.useRef<HTMLImageElement>(null);
  const charList = fetchCharsData();
  React.useEffect(() => {
    // start timer
    fetchServerTime();
    setStartTimer(fetchServerTime());
  }, []);
  React.useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleResize = async() => {
    setScreenSize({
      height: imgRef.current?.clientHeight!,
      width: imgRef.current?.clientWidth!,
    });
  };
  const handleClick = (e: React.MouseEvent): void => {
    const { offsetX: X, offsetY: Y } = e.nativeEvent;
    setCoords({ X: X, Y: Y })
    setScreenSize({ height: imgRef.current?.clientHeight!, width: imgRef.current?.clientWidth! })
    setXOffset(X + 25);
    setYOffset(Y - 80 );
    toggleDropDownMenu();
  };
  const endGame = () => {
    console.log('game over')
    const endTime = fetchServerTime();
    const elapsedTime = Math.round((endTime - startTimer + Number.EPSILON ) * 100) / 100;
    console.log(elapsedTime);
    setEndTimer(elapsedTime);
    setModal(true);
  };
  const isCharAtCoords = async(char: string) => {
    const staticDimensions: any = await fetchStaticDimensions().then((result) => result.data());
    const percentage: number = staticDimensions?.height / screenSize?.height;
    const sum: number = Math.round((coords.X * percentage) + (coords.Y * percentage));
    const item = (await charList).find((item) => item.id === char);
    const itemSum = item.X + item.Y;
    if(sum <= (itemSum + item.radius) && sum >= (itemSum - item.radius)) {
    console.log(char + ' found!');
    setCharFound(char);
    toggleDropDownMenu();
    toggleCorrect(char);
    return;
    }
    toggleWrong(char);
    toggleDropDownMenu();
  };
  const toggleDropDownMenu = (): void => {
    if(!toggleDropDown) {
      setDisplay("block");
      setToggleDropDown(true);
    };
    if(toggleDropDown) {
      setDisplay("none");
      setToggleDropDown(false);
    };
  };
  const restartGame = (): void => {
    setStartTimer(0);
    setEndTimer(0);
    setModal(false);
    setDisplay('none');
    setReset(true);
    setStartTimer(fetchServerTime());
    setTimeout(() => {
      setReset(false);
    }, 2000)
  };
  const toggleWrong = (str: string): void => {
    setShowWrong({ opacity: 1, char: str, });
    setTimeout(() => {
      setShowWrong({ opacity: 0, char: str });
    }, 1250);
  };
  const toggleCorrect = (str: string): void => {
    setShowCorrect({ opacity: 1, char: str, });
    setTimeout(() => { setShowCorrect({ opacity: 0, char: str, }) }, 1250);
  };
  return (
    <Game>
      <GameOverComponent  modal={ modal } elapsedTime={ endTimer } restartGame={ restartGame }/>
      <Wrong opacity={ showWrong.opacity }>{ showWrong.char } is not here!</Wrong>
      <Correct opacity={ showCorrect.opacity }>{ showCorrect.char } found!</Correct>
      <img 
      ref={ imgRef } 
      draggable='false' 
      onClick={ handleClick } 
      src={level1} 
      alt='game'
      />
      <DropDownComponent 
      char={ charFound } 
      X={ XOffset } 
      Y={ YOffset } 
      display={ display }
      reset = { reset }
      checkForChar={ isCharAtCoords }
      endGame = { endGame }
      />
    </Game>
  )
}

export default GameComponent;
