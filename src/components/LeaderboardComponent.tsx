import Leaderboard from "../styles/LeaderboardStyle";
import { fetchLeaderboard } from "./firebase";
import React from "react";
import { Loader } from '../styles/GameOverStyle';
import { uuid } from 'uuidv4';

const LeaderboardComponent = () => {
  const [leaderboard, setLeaderboard] = React.useState([] as any);
  const [isLoaded, setIsLoaded] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      fetchLeaderboard().then((res) => {
        const sorted = res.sort((a, b) => a.time - b.time)
        setLeaderboard(sorted);
        setIsLoaded(true);
      }, (error) => console.log(error) )
    }, 2000)
    
  }, [])
  if(!isLoaded) {
    return (
      <Leaderboard>
        Fetching scores....
        <Loader showLoader='inline-block'><div/><div/></Loader>
      </Leaderboard>
    )
  }
    return (
      <Leaderboard>
        <ul>
          <h1>Leaderboard</h1>
        { leaderboard.map((item: any) => {
          return (
            <li key={uuid()}>
              <h4>{ (leaderboard.indexOf(item) + 1) }. { item.name }</h4>
              <p>{ item.time }s</p>
            </li>
          )
        })}
        </ul>
      </Leaderboard>
    )
}
export default LeaderboardComponent;