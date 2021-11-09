import styled from "styled-components";
const Game = styled.main`
  display: flex;
  height: auto;
  background-color: #464646;
  & img {
    user-select: none;
    max-width: 100%;
    height: auto;
  }
`
const ImageWrapper = styled.div`

`
const Wrong = styled.div<{ opacity: number }>`
  position: fixed;
  top: 10%;
  left: 45%;
  height: 50px;
  width: 140px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FF0000;
  border-radius: 5px;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: bold;
  opacity: ${ props => props.opacity };
  pointer-events: none;
  transition: opacity 0.2s ease-in-out 0s;
  z-index: 999;
`
const Correct = styled(Wrong)<{ opacity: number }>`
  background-color: #23C81B;
  opacity: ${ props=> props.opacity };
`
const Target = styled.div<{ top: number, left: number, currentColour: string }>`
  position: absolute;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  height: 50px;
  width: 50px;
  background-color: ${ props => props.currentColour };
  border-radius: 50%;
  z-index: 19;
`

export { Game, Wrong, Target, ImageWrapper, Correct }