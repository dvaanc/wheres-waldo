import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { DropDown, ImageWrapper, Item, TextWrapper } from "../styles/DropDownStyle";
import zoidberg from "../assets/zoidberg.png";
import brian from "../assets/brian-griffin.png";
import link from "../assets/link.png";
import { fetchCharsInfo } from './firebase';

interface DropDownProps { X: number, Y: number, display: string };
const DropDownComponent: React.FC<DropDownProps> = ({ X, Y, display }) => {
  const [list, setList] = React.useState([
    {
      name: "Zoidberg",
      src: zoidberg,
    },
    {
      name: "Brian Griffin",
      src: brian,
    },
    {
      name: "Link",
      src: link,
    },
  ])
  const [XOffset, setXOffset] = React.useState(50);
  const [YOffset, setYOffset] = React.useState(0);
  const [displayVal, setDisplay] = React.useState("none");
  React.useEffect(() => {
    setXOffset(X);
    setYOffset(Y);
    setDisplay(display);
  }, [X, Y, display])
  return (
    <DropDown style={{ top: YOffset, left: XOffset, display: displayVal }}>
      { list.map((item) => {
        const uuid = uuidv4();
        return (
          <Item key={uuid}>
          <ImageWrapper>
            <img src={item.src} alt="zoidberg"/>
          </ImageWrapper>
          <TextWrapper>
            <p>{item.name}</p>
          </TextWrapper>
        </Item>
        )
      })}
    </DropDown>
  )
}


export default DropDownComponent;