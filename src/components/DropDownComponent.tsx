import { DropDown, ImageWrapper, Item, TextWrapper } from "../styles/DropDownStyle";
import zoidberg from "../assets/zoidberg.png"
import React from "react";
interface DropDownProps {
  X: number,
  Y: number,
  display: string,
}
// import styled from "styled-components";
const DropDownComponent: React.FC<DropDownProps> = ({X, Y, display}) => {
  const [XOffset, setXOffset] = React.useState(0);
  const [YOffset, setYOffset] = React.useState(0);
  const [displayVal, setDisplay] = React.useState("none");
  // const setCoordinates = async(X:number, Y:number) => {
  //   await setXOffset(X);
  //   await setYOffset(Y);
  // }
  React.useEffect(() => {
    setXOffset(X);
    setYOffset(Y);
    setDisplay(display);
  }, [X, Y, display])
  return (
    <DropDown style={{ display: displayVal, position: "fixed", left: XOffset, top: YOffset }}>
      <Item>
        <ImageWrapper>
          <img src={zoidberg} alt="zoidberg"/>
        </ImageWrapper>
        <TextWrapper>
          <p>Zoidberg</p>
        </TextWrapper>
      </Item>
    </DropDown>
  )
}


export default DropDownComponent;