import React from 'react';
import { HeaderComponent as Header } from './components/HeaderComponent';
import GameComponent from './components/GameComponent';
import { FooterComponent as Footer } from './components/FooterComponent';
import LeaderboardComponent from './components/LeaderboardComponent';
import { App } from './styles/App';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';


function AppComponent() {
  return (
    <App>
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={ <GameComponent /> } />
          <Route path='/leaderboard' element={ <LeaderboardComponent /> } />
        </Routes>

      </Router>
      <Footer />
    </App>
  );
}

export default AppComponent;
