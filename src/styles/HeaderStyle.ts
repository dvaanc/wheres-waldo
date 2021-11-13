import styled from "styled-components";
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  top: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100vw;
  padding: 10px;
  color: #6ddbfa;
  background-color: #20232A;
  z-index: 5;
  & ul {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    list-style-type: none;
  }
  & li {
    padding: 5px;
    margin-right: 10px;
    border-bottom: 1px solid; 
    &:hover {
      cursor: pointer;
    }
  }
  & a {
    color: #6DDBFA;
    text-decoration: none;
  }
`