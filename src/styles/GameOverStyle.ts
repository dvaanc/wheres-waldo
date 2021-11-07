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
`
const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 20%;
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
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    position: absolute;
    border: 4px solid #6DDBFA;;
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
  justify-content: center;
  align-items: center;
  width: 100%; 
  height: 20%; 
  padding: 10px;
  border-bottom: 1px solid grey;
`
const Mid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  border-bottom: 1px solid grey;
`
const Bot = styled.div`

`
export { Modal, ModalContent, Loader, Top, Mid, Bot };