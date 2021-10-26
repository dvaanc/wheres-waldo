import styled from "styled-components";

const LevelSelectMenu = styled.div<{ display: string }>`
  display: ${props => props.display};
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 6;
`;

export { LevelSelectMenu }