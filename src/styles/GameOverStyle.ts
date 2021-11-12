import styled, { keyframes } from "styled-components";

const Modal = styled.div<{ enablePointer: string, show: number}>`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => props.show};
  position: fixed;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: ${props => props.enablePointer};
  transition: opacity 0.2s ease;
`
const ModalContent = styled.div<{ display: string }>`
  display: ${ props => props.display };
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 400px;
  height: 300px;
  border-radius: 8px;
  background-color: #282c34;
  color: #6DDBFA;
`
const rippleAnimation = keyframes`
  0% { top: 36px; left: 36px; width: 0; height: 0; opacity: 1; }
  100% { top: 0px; left: 0px; width: 72px; height: 72px; opacity: 0; }
`
const Loader = styled.div<{ showLoader: string }>`
  display: ${props => props.showLoader};
  position: fixed;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 150px;
  & div {
    position: absolute;
    border: 4px solid #6DDBFA;
    opacity: 1;
    border-radius: 50%;
    animation: ${rippleAnimation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  & div::nth-child(2) {
    animation-delay: -0.5s;
  }
  `
const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%; 
  min-height: 15%; 
  padding: 10px;
  border-bottom: 1px solid #6DDBFA;
  & p {
    font-size: 25px;
    font-weight: bold;
  }
`
const Mid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  padding-bottom: 40px;
  border-bottom: 1px solid #6DDBFA;
  width: 100%;
  min-height: 55%;
  & input[type=text] {
    width: 90%;
    height: 45px;
    border-radius: 6px;
    border: none;
    padding-left: 15px;
    font-size: 18px;
    &:focus {
      outline: none;
    }
  }
`
const Bot = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  width: 100%;
  min-height: 15%;
  & button {
    height: 40px;
    width: 120px;
    border-radius: 6px;
    border: none;
    background-color: #6DDBFA;
    font-size: 16px;
    color: #282c34;
    &:hover {
      cursor: pointer;
    }
  }
`
export { Modal, ModalContent, Loader, Top, Mid, Bot };