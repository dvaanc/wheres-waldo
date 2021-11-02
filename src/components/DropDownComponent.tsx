import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { DropDown, ImageWrapper, Item, TextWrapper } from "../styles/DropDownStyle";
import zoidberg from "../assets/zoidberg.png";
import brian from "../assets/brian-griffin.png";
import link from "../assets/link.png";
import { fetchCharsInfo } from './firebase';

interface DropDownRef { charFound(): void, }
interface DropDownProps { char: string, X: number, Y: number, display: string, checkForChar(char: string): Promise<void>, ref: React.RefObject<DropDownRef> };
interface ItemObject { name: string, src: string, found: boolean }

const DropDownComponent: React.FC<DropDownProps> = ({ char, X, Y, display, checkForChar, ref }) => {
  React.useEffect(() => {
    const chars = fetchCharsInfo();
    // console.log(chars)
  }, [])

  const [list, setList] = React.useState([
    { name: "zoidberg", src: zoidberg, found: false },
    { name: "brian-griffin", src: brian, found: false },
    { name: "link", src: link, found: false },
  ] as Array<ItemObject>)
  const [XOffset, setXOffset] = React.useState(50 as number);
  const [YOffset, setYOffset] = React.useState(0 as number);
  const [displayVal, setDisplay] = React.useState("none" as string);
  React.useEffect(() => {
    setXOffset(X);
    setYOffset(Y);
    setDisplay(display);
  }, [X, Y, display])
  React.useEffect(() => {
    charFound(char)
  }, [char])
  const testF = () => {
    console.log('it worked')
  }
  const charFound = (char: string): void => {
    const item  = list.find((item?) => item.name === char) as ItemObject;
    item.found! = true;
    setList({ ...list})
    console.log('test')
  }
  const handleClick = (e: React.MouseEvent): void => {
    if (e !== null && e.target instanceof HTMLElement) {
      console.log(e.target.dataset.char)
      checkForChar(e.target.dataset.char!);
    }
  }
  return (
    <DropDown style={{ top: YOffset, left: XOffset, display: displayVal }}>
      { list.map((item) => {
        const uuid = uuidv4();
        return (
          <Item key={ uuid } data-char={ item.name } onClick={ handleClick }>
          <ImageWrapper>
            <img src={ item.src } data-char={ item.name } alt="zoidberg"/>
          </ImageWrapper>
          <TextWrapper data-char={ item.name }>
            <p data-char={ item.name }>{ item.name }</p>
          </TextWrapper>
        </Item>
        )
      })}
    </DropDown>
  )
}


export default DropDownComponent;