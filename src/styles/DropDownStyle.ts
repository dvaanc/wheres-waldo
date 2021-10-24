import styled from "styled-components";
const DropDown = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 180px;
  height: 150px;
  background-color: rgba(34, 34, 34, 0.8);
  border-radius: 5px;
`
const Item = styled.div`
    display: flex;
    width: 100%;
    height: 30%;
    border-radius: 5px;
    transition: transform 0.3s ease 0s;
    &:hover {
    cursor: pointer;
    transform: scale(1.05);
    }
`
const ImageWrapper = styled.div`
  width: 30%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  & img {
    height: auto;
    max-width: 100%;
    object-position: center;
    object-fit: cover;
  }
`
const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 25px;
  color: #FFFFFF;
`

export { DropDown, ImageWrapper, Item, TextWrapper };