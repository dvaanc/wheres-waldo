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
const Wrong = styled.div<{ opacity: number }>`
  position: absolute;
  top: 15%;
  left: 42%;
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
`
const Target = styled.div<{ currentColour: string }>`
  height: 50px;
  width: 50px;
  position: absolute;
  background-color: ${ props => props.currentColour };
  border-radius: 50%;
`

export { Game, Wrong, Target }