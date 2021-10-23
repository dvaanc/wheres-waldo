import styled from "styled-components";
export const DropDown = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  height: auto;
  background-color: #222222;
  border-radius: 4px;
  & div {
    width: 100%;
    height: 40px;
    transition: transform 0.3s ease 0s;
    background-color: darkblue;
  }
  & div:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`