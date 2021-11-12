import { Header } from "../styles/HeaderStyle";
import { Link } from "react-router-dom";
export const HeaderComponent = () => {
  return (
    <Header>
      <ul>
        <li>
          <Link to='/'> HOME</Link>
        </li>
        <li>
        <Link to='/leaderboard'> LEADERBOARD </Link>
        </li>
      </ul>
      <h1>Photo Tagging Game</h1>
    </Header>
  )
}
