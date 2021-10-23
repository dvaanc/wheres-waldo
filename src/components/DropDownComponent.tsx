import { DropDown } from "../styles/DropDownStyle";
import styled from "styled-components";
export const DropDownComponent = () => {
  return (
    <DropDown>
      <div>
        
      </div>
    </DropDown>
  )
}
const ImageWrapper = styled.div`
  width: 30%;
  height: 100%;
  & img {
    height: auto;
    width: 100%;
    object-position: center;
    object-fit: cover;
  }
`