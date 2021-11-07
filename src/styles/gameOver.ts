import styled from "styled-components";

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
width: 35%;
height: 20%;
border-radius: 8px;
background-color: #FFFFFF;
color: black;
`

export { Modal, ModalContent};