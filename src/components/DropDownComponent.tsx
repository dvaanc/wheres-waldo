import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { DropDown, ImageWrapper, Item, TextWrapper } from "../styles/DropDownStyle";
import zoidberg from "../assets/zoidberg.png";
import brian from "../assets/brian-griffin.png";
import link from "../assets/link.png";

interface DropDownProps { 
  X: number, 
  Y: number, 
  display: string, 
  checkForChar(arg: null): void; 
};
const DropDownComponent: React.FC<DropDownProps> = ({ X, Y, display, checkForChar }) => {
  const [list, setList] = React.useState([
    {
      name: "Zoidberg",
      src: zoidberg,
      found: false,
    },
    {
      name: "Brian Griffin",
      src: brian,
      found: false,
    },
    {
      name: "Link",
      src: link,
      found: false,
    },
  ]
  )
  const [XOffset, setXOffset] = React.useState(50);
  const [YOffset, setYOffset] = React.useState(0);
  const [displayVal, setDisplay] = React.useState("none");
  React.useEffect(() => {
    setXOffset(X);
    setYOffset(Y);
    setDisplay(display);
  }, [X, Y, display])
  const handleClick = (e: React.MouseEvent): void => {
    if (e !== null && e.target instanceof HTMLElement) {
      console.log(e.target.dataset.char)
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