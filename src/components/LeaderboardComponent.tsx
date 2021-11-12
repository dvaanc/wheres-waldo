import Leaderboard from "../styles/LeaderboardStyle";
import { fetchLeaderboard } from "./firebase";
import React from "react";
const LeaderboardComponent = () => {
  const [leaderboard, setLeaderboard] = React.useState([] as any);
  const data = fetchLeaderboard();
  React.useEffect(() => {
    const leader = async() => {
      const dataL = await fetchLeaderboard();
      setLeaderboard(dataL);
    }
  }, [])
  return (
    <Leaderboard>
      <ul>
      { leaderboard.map((item: any) => {
        return (
          <li>
            <h4>{ item.name }</h4>
            <p>{ item.time }s</p>
          </li>
        )
      })}

      </ul>

    </Leaderboard>
  )
}
export default LeaderboardComponent;