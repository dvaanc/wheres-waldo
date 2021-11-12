import React from 'react';
import { HeaderComponent as Header } from './components/HeaderComponent';
import GameComponent from './components/GameComponent';
import { FooterComponent as Footer } from './components/FooterComponent';
import LeaderboardComponent from './components/LeaderboardComponent';
import { App } from './styles/App';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


function AppComponent() {
  return (
    <App>
      <Router>
      <Header />
        <Switch>
          <Route exact path='/' component={ GameComponent } />
          <Route exact path='/leaderboard' component={ LeaderboardComponent } />
        </Switch>

      </Router>
      <Footer />
    </App>
  );
}

export default AppComponent;
