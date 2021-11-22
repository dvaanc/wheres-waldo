import styled from "styled-components";

const Leaderboard = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #282C34;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 50px;
  color: #6DDBFA;
  & h1 {
    margin-bottom: 50px;
  }
  & ul {
    list-style-type: none;
    & li {
      display: flex;
      flex-direction: row;
      margin-bottom: 10px;
      & h4 {
        margin-right: 10px;
      }
    }
  }
`
export default Leaderboard