import { Game } from "../styles/GameStyle";
import level1 from "../assets/level1.jpg";
export const GameComponent = () => {
  return (
    <Game>
      <img src={level1}/>
    </Game>
  )
}